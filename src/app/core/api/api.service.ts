import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';

/**
 * Generic class to manage API communication
 * @class
 */
export abstract class ApiService {
    /** Gets the base api url @property {string} */
    protected baseUrl = environment.apiUrl;

    /**
    * Initializes a new instance of the ApiService.
    * @constructor
    * @param {AuthHttp} authHttp The authentification http service.
    * @param {string} path api path.
    */
    constructor(
        protected http: HttpClient,
        protected path: string) { }

    /**
     * Get object by id.
     * @param id : entity id
     * @returns {Observable<any>}
     */
    get(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${this.path}/${id}`);
    }

    /**
     * List object for a giving entity.
     * @method
     * @param {Object} parameters search filter list
     * @returns {Observable<any>}
     */
    query(parameters?: Object): Observable<any> {
        return this.http.get(`${this.baseUrl}/${this.path}`, {
            params: this.getUrlParameters(parameters),
        });
    }

    /**
     * Count objects for a giving entity.
     * @method
     * @param {Object} parameters search filter list
     * @returns {Observable<any>}
     */
    count(parameters?: Object): Observable<any> {
        return this.http.get(`${this.baseUrl}/${this.path}/count`, {
            params: this.getUrlParameters(parameters),
        });
    }

    /**
     * Create or update an object
     * If the object contain an ID just do a PUT, else do a POST
     * @method
     * @param {any} obj
     * @returns {Observable<any>}
     */
    save(object: any): Observable<any> {
        return Observable.of({});
    }

    /**
     * Generate url parameters.
     * Use in query and count requests.
     * @method
     * @param {Object} parameters search filter list
     */
    private getUrlParameters(parameters): HttpParams {
        let urlParameters = new HttpParams();
        // Manage query parameters by a generic object
        if (parameters) {
            for (const key of Object.keys(parameters)) {
                const value = this.checkProperty(parameters[key]);
                if (value && value !== '' && value.length !== 0) {
                    urlParameters = urlParameters.append(key, value);
                }
            }
        }
        return urlParameters;
    }

    /**
     * Check a property and transform it if necessary
     * A transformation occurs when property :
     * - is an object
     * - is a datepicker structure
     * - is an array
     * @param property
     */
    private checkProperty(property: any, save?: boolean) {
        // if the value is a instance of Object, we stringify it
        if (property instanceof Object) {
            if (property.id) {
                property = !save ? property.id : {id: property.id, name: property.name};
            } else if (property.length) {
                // Property is an array
                property = property.map((el) => !save ? (el.id || el) : el);
            } else if (Object.keys(property).length) {
                return property;
            } else {
                // Property is an empty object, we need to delete the field.
                return property;
            }
        }
        return property;
    }
}
