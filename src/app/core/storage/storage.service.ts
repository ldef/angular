import { Injectable } from '@angular/core';

/**
 * Represents the application storage service.
 * @class
 */
@Injectable()
export class StorageService {

  /**
   * Initialize the StorageService class.
   * @constructor
   */
  constructor() { }

  /**
   * Gets the storage engine.
   * @property {Object}
   */
  get engine() {
    return localStorage;
  }

  /**
   * Gets an item from the app storage engine.
   * @method
   * @param {string} key The queried item name.
   * @param {Object} localStorage or sessionStorage.
   * @return The item
   */
  getItem<T>(key: string, engine?): T {
    return JSON.parse((engine || this.engine).getItem(key));
  }

  /**
   * Set an item from the app storage engine.
   * @method
   * @param {string} key The queried item name.
   * @param {T} item The current item to store.
   * @param {Object} localStorage or sessionStorage.
   */
  setItem<T>(key: string, item: T, engine?) {
    (engine || this.engine).setItem(key, JSON.stringify(item));
  }

  /**
   * Remove an item from the app storage engine.
   * @method
   * @param {string} key The queried item name.
   * @param {Object} localStorage or sessionStorage.
   */
  removeItem(key: string, engine?) {
    (engine || this.engine).removeItem(key);
  }

  /**
   * Clear the app storage engine.
   * @param {Object} localStorage or sessionStorage.
   * @method
   */
  clear(engine?) {
    (engine || this.engine).clear();
  }
}
