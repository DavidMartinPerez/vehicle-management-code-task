import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  const mockStorage: { [key: string]: string } = {};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  beforeEach(() => {
    spyOn(localStorage, 'getItem').and.callFake((key: string) => mockStorage[key] || null);
    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string) => {
      mockStorage[key] = value;
    });
    spyOn(localStorage, 'removeItem').and.callFake((key: string) => {
      delete mockStorage[key];
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store data by key', () => {
    const key = 'testKey';
    const value = { name: 'test' };

    service.setDataByKey(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
    expect(mockStorage[key]).toBe(JSON.stringify(value));
  });

  it('should retrieve data by key', () => {
    const key = 'testKey';
    const value = { name: 'test' };
    mockStorage[key] = JSON.stringify(value);

    const result = service.getByKey(key);

    expect(localStorage.getItem).toHaveBeenCalledWith(key);
    expect(result).toEqual(value);
  });

  it('should return null if key does not exist', () => {
    const result = service.getByKey('nonExistentKey');

    expect(localStorage.getItem).toHaveBeenCalledWith('nonExistentKey');
    expect(result).toBeNull();
  });

  it('should remove data by key', () => {
    const key = 'testKey';
    mockStorage[key] = JSON.stringify({ name: 'test' });

    service.removeDataByKey(key);

    expect(localStorage.removeItem).toHaveBeenCalledWith(key);
    expect(mockStorage[key]).toBeUndefined();
  });
});
