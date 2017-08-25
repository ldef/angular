import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
    /**
     * @constructor
     */
    constructor(private toastr: ToastrService) { }

    /**
     * Succes method
     * @method
     */
    success() {
        this.toastr.success('Success');
    }

    /**
     * Info method
     * @method
     */
    info() {
        this.toastr.info('Info');
    }

    /**
     * Warning method
     * @method
     */
    warning() {
        this.toastr.warning('Warning');
    }

    /**
     * Succes method
     * @method
     */
    danger() {
        this.toastr.error('Danger');
    }
}
