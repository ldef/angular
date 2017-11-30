import { Component } from '@angular/core';

import { BaseListComponent } from '../../../core/crud/base-list.component';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent extends BaseListComponent<Post> {

    /**
     * Initializes a new instance of the area component class.
     * @constructor
     * @param {PostService} service The http post service.
     */
    constructor(protected service: PostService) {
        super(service);
    }
}
