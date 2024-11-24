import { Injectable } from '@angular/core';
import { UserType } from '@core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getByKey(key:string): any {
    console.log('Getting items by', key);
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  setDataByKey(key:string, data: any): void {
    console.log('Saving new items by', key);
    console.log(data);
    localStorage.setItem(key, JSON.stringify(data));
  }

  removeDataByKey(key:string): void {
    console.log('Removing items by', key);
    localStorage.removeItem(key);
  }
}
