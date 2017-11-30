import { PaginationConfig } from 'ngx-bootstrap';

/**
 * Configuration for pagination
 * @class
 */
export class BasePaginationConfig extends PaginationConfig {
    /**
     * Init class
     * @constructor
     */
    constructor() {
        super();
        // New values
        this.main.firstText = '&laquo;';
        this.main.previousText = '&lsaquo;';
        this.main.nextText = '&rsaquo;';
        this.main.lastText = '&raquo;';
        this.main.boundaryLinks = true;
    }
}
