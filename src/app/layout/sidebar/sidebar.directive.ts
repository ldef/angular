import { Directive, HostListener } from '@angular/core';

/**
* Allows the sidebar to be toggled via click.
*/
@Directive({
  selector: '.sidebar-toggler',
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
  selector: '.mobile-sidebar-toggler',
})
export class MobileSidebarToggleDirective {
  constructor() { }

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

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
