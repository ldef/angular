import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

import { BaseListComponent } from '../../../core/crud/base-list.component';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent extends BaseListComponent<Post> implements OnInit {

    /**
     * Initializes a new instance of the area component class.
     * @constructor
     * @param {TranslateService} translate The angular translate service.
     * @param {ToastrService} toastr The angular toastr service.
     * @param {PostService} service The angular toastr service.
     */
    constructor(protected translate: TranslateService,
        protected toastr: ToastrService,
        protected service: PostService) {
            super(toastr, translate, service);
    }

    /**
     * Occurred when component initializes.
     * @method
     */
    ngOnInit() {
        super.ngOnInit();
    }
}
