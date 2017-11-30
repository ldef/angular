import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
/**
 * Sidebar component containing all page access (restrict by rights).
 * This component include the language management so it should be extend I18nComponent.
 * @class
 */
export class SidebarComponent {

    /**
	 * Initializes a new instance of the SidebarComponent class.
	 * @constructor
	 */
    constructor() { }
}
