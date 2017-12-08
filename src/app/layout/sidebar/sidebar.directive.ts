import { Directive, HostListener } from '@angular/core';

/**
* Allows the sidebar to be toggled via click.
*/
@Directive({
  selector: '[appSidebarToggler]',
})
export class SidebarToggleDirective {
  /** Test if the sidebar div is shown @property{boolean}*/
  show: boolean;
  /**
    * Initializes a new instance of the sidenav toggler component class.
    * @constructor
    */
  constructor() {
      this.show = true;
  }

  /**
   * Toggle the sidebar and store state in locale storage
   * @param {Event} event click event
   * @method
   */
  @HostListener('click', ['$event'])
  toggle(event: Event) {
    event.preventDefault();
    this.show = !this.show;
    document.querySelector('body').classList.toggle('sidebar-hidden');
  }
}

@Directive({
  selector: '[appMobileSidebarToggler]',
})
export class MobileSidebarToggleDirective {
  constructor() { }

  /**
   * Toggle the sidebar for mobiles
   * @param {Event} event click event
   * @method
   */
  @HostListener('click', ['$event'])
  toggle(event: Event) {
    event.preventDefault();
    document.querySelector('body').classList.toggle('sidebar-mobile-show');
  }
}
