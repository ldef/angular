import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import 'rxjs/add/operator/toPromise';

/**
 * Represents a basic guard to check if the user is logged in.
 * @class
 */
@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {
  /** store refresh token promise to access it in rights guards */
  refreshTokenPromise: Promise<boolean>;
  /**
	* Initializes a new instance of the AuthenticationGuard class.
	* @constructor
  * @param {AuthenticationService} authService The application authentication service.
  * @param {Router} router The angular router to redirect on login page if the user isn't logged.
	*/
  constructor(private authService: AuthenticationService, private router: Router) { }

  /**
   * Implements method to call this service on an angular router.
   * User can access to the route if he's logged in.
   * @param {ActivatedRouteSnapshot} route current route.
   * @param {RouterStateSnapshot} state route state to get url.
   * @method
   * @return {Promise<boolean>|boolean} Value indicating whether user is logged in.
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    return this.isAuthenticated(state.url);
  }

  /**
  * Implements method to call this service on an angular router.
  * User can access to the route if he's logged in.
  * @param {ActivatedRouteSnapshot} route current route.
  * @param {RouterStateSnapshot} state route state to get url.
  * @method
  * @return {Promise<boolean>|boolean} Value indicating whether user is logged in.
  */
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    return this.isAuthenticated(state.url);
  }

  /**
  * Is the user authenticated
  * @method
  * @param {string} url The redirect url.
  * @return {Promise<boolean>|boolean} Value indicating whether user is logged in.
  */
  isAuthenticated(url: string) {
    // No authentication informations
    if (!this.authService.authInfo) {
      return this.errorHandler(url);
    }
    return true;
  }



  /**
   * Execute on authentication failed.
   * @method
   * @param {string} url The redirect url.
   * @return {boolean}
   */
  errorHandler(url): boolean {
    // store attempted URL for redirection
    this.authService.redirectUrl = url;
    this.authService.logout();

    // navigate to login page.
    this.router.navigate(['/login']);
    return false;
  }
}
