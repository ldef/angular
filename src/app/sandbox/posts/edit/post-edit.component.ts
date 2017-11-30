import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { BaseEditComponent } from '../../../core/crud/base-edit.component';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html'
})
export class PostEditComponent extends BaseEditComponent<Post> {

    /**
    * Initializes a new instance of the post edit component class.
    * @constructor
	* @param {Router} router the angular router for redirection.
    * @param {ActivatedRoute} route the angular current route used to recover parameters.
    * @param {PostService} service The http post service.
    * @param {FormBuilder} formBuilder The angular form builder.
    */
    constructor(protected router: Router,
        protected route: ActivatedRoute,
        protected service: PostService,
        private formBuilder: FormBuilder) {
            super(router, route, service);
    }

    /**
     * Build form group
     * @method
     */
    buildForm() {
        this.form = this.formBuilder.group({
            'firstname': [this.entity.first_name, [Validators.required]],
            'lastname': [this.entity.last_name, [Validators.required]]
        });
    }
}
