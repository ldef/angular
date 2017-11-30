import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Service to manage currencies.
 * @class
 */
@Injectable()
export class PostService extends ApiService {
    /**
    * Initializes a new instance of the CurrencyService.
    * @constructor
    * @param {HttpClient} http The authentification http service.
    * @param {ToastrService} toastr toast manager to display toast after platform saving.
    * @param {TranslateService} translate ngx translate service to manage translation.
    */
    constructor(protected http: HttpClient) {
        super(http, 'users');
    }

    /**
     * List object for a giving entity.
     * @method
     * @param {Object} parameters search filter list
     * @returns {Observable<any>}
     */
    query(parameters?: Object): Observable<any> {
        return super.query(parameters).map(data => data.data);
    }

    /**
     * Count objects for a giving entity.
     * @method
     * @param {Object} parameters search filter list
     * @returns {Observable<any>}
     */
    count(parameters?: Object): Observable<any> {
        return super.query(parameters).map(data => {
            return { count: data.total };
        });
    }
}
