import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/observable/of';

import { environment } from '../../environments/environment';
import { StorageService } from '../core/storage/storage.service';
import { AuthModel } from './authentication.model';

/**
 * Represents the authentication service.
 * @class
 */
@Injectable()
export class AuthenticationService {

    /** Authentication key */
    AUTH_KEY = 'credentials';

    /**
     * Store an url to redirect user after login.
     * @property {string}
     */
    redirectUrl: string;

    /**
     * Initializes a new instance of the AuthenticationService class.
     * @param {StorageService} storage The application storage service.
     * @param {Http} http The angular http service.
     * @param {Idle} idle service to auto logout the user if inactivity.
     * @param {Router} router angular router.
     */
    constructor(private storage: StorageService,
        private http: HttpClient,
        private router: Router) { }

    /**
     * Gets the current user authorization informations.
     * @property
     */
    get authInfo(): AuthModel {
        return this.storage.getItem<AuthModel>(this.AUTH_KEY, sessionStorage);
    }

    /**
    * Set the current user informations.
    * @param {AuthModel} value new user informations.
    * @property
    */
    set authInfo(value: AuthModel) {
        this.storage.setItem<AuthModel>(this.AUTH_KEY, value, sessionStorage);
    }

    /**
     * Gets the current user token.
     * @readonly
     * @property
     */
    get token(): string {
        return this.authInfo && this.authInfo.token;
    }

    /**
    * Log the user in.
    * @method
    * @param {string} username The current user login.
    * @param {string} password The current user password.
    * @return {Observable<any>} Value indicating whether user is logged.
    */
    login(username: string, password: string): Observable<any> {
        const data = {
            token: 'qskfhkljsqdfhklj',
        }

        // store authentication informations
        this.authInfo = {
            username: username,
            token: data.token,
            refresh: data.token,
            fullname: 'Otto',
            profile: 'Admin'
        };
        return Observable.of(data);
    }

    /**
     * Log the user out.
     * @method
     */
    logout() {
        this.authInfo = null;
    }
}
