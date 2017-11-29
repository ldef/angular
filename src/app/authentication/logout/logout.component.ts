import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service' ;

/**
 * Represents the logout components.
 * @class
 */
@Component({
  selector: 'app-logout',
  template : ''
})
export class LogoutComponent implements OnInit {
    /**
    * Initializes a new instance of the LogoutComponent class.
	* @param {Router} router The current router.
	* @param {AuthenticationService} authService The JWT authentication service.
    * @constructor
    */
    constructor(private router: Router, private authService: AuthenticationService) { }

    /**
     * Executed on component Initialization.
     * @method
     */
    ngOnInit() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
