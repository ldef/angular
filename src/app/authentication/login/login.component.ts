import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/catch';

import { AuthenticationService } from '../authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    /** Gets or sets the login form group. @property {FormGroup} */
    loginForm: FormGroup;

    /**
	* Initializes a new instance of the LoginComponent class.
	* @constructor
	* @param {Router} router The current router.
	* @param {FormBuilder} formBuilder The angular form builder.
	* @param {AuthenticationService} authService The JWT authentication service.
	* @param {TranslateService} translate ngx translate service to manage translation on login error.
	* @param {ToastrService} toastrService toast manager to display error on login.
	*/
    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private authService: AuthenticationService,
        private translate: TranslateService,
        private toastr: ToastrService) { }


    /**
	 * Execute when component is initialized.
	 * @method
	 */
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    /**
     * Login
     * @method
     */
    login() {
        if (!this.loginForm.valid) {
            return;
        }
        let authenticationFailed = false;
        this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
        .catch((response: Response) => {
            authenticationFailed = true;
            const data = response.json();
            // Show toast with api error code
            if (data.errors) {
                this.toastr.error(this.translate.instant(data.errors[0]));
            }
            return Observable.of({});
        })
        .subscribe(() => {
            if (authenticationFailed) {
                return;
            }
            this.router.navigate([this.authService.redirectUrl || '/']);
        });
    }
}
