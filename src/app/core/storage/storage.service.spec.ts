import { TestBed, inject } from '@angular/core/testing';
import { StorageService } from './storage.service';
const DATA = { user: 'test' };
const KEY = 'key';

describe('Storage service tests', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [StorageService]
        });
    });

    it('should inject service', inject([StorageService], (service: StorageService) => {
        expect(service).toBeTruthy();
    }));

    it('should update data in local storage', inject([StorageService], (service: StorageService) => {
        service.setItem(KEY, DATA);
        expect(service.getItem(KEY)).toEqual(DATA);
        service.removeItem(KEY);
        expect(service.getItem(KEY)).toBeNull();
    }));

    it('should clear storage', inject([StorageService], (service: StorageService) => {
        service.setItem(KEY, DATA);
        expect(service.getItem(KEY)).toEqual(DATA);
        service.clear();
        expect(service.getItem(KEY)).toBeNull();
    }));
});
