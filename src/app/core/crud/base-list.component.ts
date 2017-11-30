import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../../../environments/environment';
import { ApiService } from 'app/core/api/api.service';

/**
 * Represents the sort class
 * @class
 */
export class Sort {
  /** Gets or sets the list element total. @property {string} */
  column: string;

  /** Gets or sets the list element total. @property {string} */
  direction: string;
}

export class ListFormParams {
  /** Gets or sets the current page. @property {number} */
  page: number;

  /** Gets or sets the page element limit. @property {number} */
  limit: number;

  /** Gets or sets the sorting list string. @property {string} */
  sort: string;
}

export class TotalModel {
  /** Gets or sets the total number of elements. @property {number} */
  count: number;

  // Remove once area api service available
  constructor(count: number) {
    this.count = count;
  }
}

/**
 * Base list component for managing pagination and sorting for a list.
 * @class
 */
export abstract class BaseListComponent<TEntity> implements OnInit {
  /** Gets or sets the data list. @property {TEntity[]} */
  data: TEntity[];

  /** Gets or sets the list search text input. @property {string} */
  search: string;

  /** Gets or sets the list last search text input. @property {string} */
  lastSearch: string;

  /** Gets or sets the list element total. @property {number} */
  count: number;

  /** Gets or sets the page element limit. @property {number} */
  limit = environment.page.limit;

  /** Gets or sets the current page. @property {number} */
  currentPage = 1;

  /** Gets or sets the sorting list. @property {Sort[]} */
  sorts: Array<Sort> = [];

  /**
   * Gets the string sort list.
   * @method
   * @property {string}
   */
  get sort(): string {
    if (!this.sorts || this.sorts.length === 0) {
      return '';
    }

    return this.sorts.map(item => item.column + ':' + item.direction).join(',');
  }

  /**
   * Initializes a new instance of the {BaseListComponent}
   * @constructor
   * @param {ToastrService} toastr The angular toastr.
   * @param {TranslateService} translate The angular translate service.
   */
  constructor(
    protected toastr: ToastrService,
    protected translate: TranslateService,
    protected apiService: ApiService
  ) {
  }

  /**
   * Occurred when component initializes.
   * @method
   */
  ngOnInit() {
    this.initTable();
  }

  /**
   * Initializes the list table.
   * @method
   */
  initTable() {
    const params: ListFormParams = {
      sort: this.sort,
      page: this.currentPage,
      limit: this.limit
    };
    this.getTotal().subscribe(result => this.count = result.count);
    this.getAll(params).subscribe(result => this.data = result);
  }

  /**
   * Gets all the element for a page.
   * @method
   * @param {ListFormParams} parameters The current search parameters.
   * @returns {Observable<TEntity[]>}
   */
  getAll(parameters?: ListFormParams): Observable<TEntity[]> {
    return this.apiService.query(parameters);
  }

  /**
   * Gets the total number of element.
   * @method
   * @returns {Observable<TotalModel>}
   */
  getTotal(): Observable<TotalModel> {
    return this.apiService.count();
  }

  /**
   * Gets the sort direction for a column.
   * @method
   * @param {string} column The column name to sort.
   */
  getSortDirection(column: string) {
    const sort = this.sorts.find(item => item.column === column);
    return sort ? sort.direction : '';
  }

  /**
   * Order list by columns.
   * @method
   * @param {string} column Sorting column.
   */
  orderListBy(column: string) {
    const sort = this.sorts.find(item => item.column === column);
    if (!sort) {
      // add new sorts columns
      this.sorts.push({ column: column, direction: 'asc' });
    } else if (sort.direction === 'asc') {
      sort.direction = 'desc';
    } else {
      const index = this.sorts.indexOf(sort);
      this.sorts.splice(index, 1);
    }

    this.currentPage = 1;
    this.initTable();
  }

  /**
   * Occurrend when page changed.
   * @method
   * @param $event The event triggered.
   */
  onPageChanged($event) {
    this.currentPage = $event.page;
    this.initTable();
  }
}
