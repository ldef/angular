import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../api/api.service';
import { ApiModel } from '../api/api.model';

/**
 * Base edit component for managing create and update for an entity.
 * @class
 */
export abstract class BaseEditComponent<T extends ApiModel> implements OnInit {
    /** Reactive form group @property {FormGroup} */
    form: FormGroup;
    /** Current entity @property {ApiModel} */
    entity: T;

    /**
    * Initializes a new instance of the areas component class.
    * @constructor
	* @param {Router} router the angular router for redirection.
    * @param {ActivatedRoute} route the angular current route used to recover parameters.
    * @param {ApiService} apiService The http service to use.
    */
    constructor(protected router: Router,
        protected route: ActivatedRoute,
        protected apiService: ApiService) { }

    /**
     * Occurred when component initializes.
     * @method
     */
    ngOnInit() {
        let observable = Observable.of({} as T);
        this.route.params.subscribe((params: Params) => {
            if (params['id']) {
                observable = this.apiService.get(params['id']);
            }
            observable.subscribe((data: T) => {
                this.entity = data;
                this.buildForm();
            });
        });
    }

    /**
     * Abstract method to build form group
     * @method
     */
    abstract buildForm();

    /**
     * Save the entity
     * Call by the form submit
     * @method
     */
    save() {
        if (this.form.valid) {
            Object.assign(this.entity, this.form.value);
            this.apiService.save(this.entity).subscribe(() => {
                this.router.navigate(['../'], {relativeTo: this.route});
            });
        }
    }
}
