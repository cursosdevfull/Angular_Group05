import { Injectable } from '@angular/core';
import { AbstractStorage } from './abstract-storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService extends AbstractStorage {
  constructor() {
    super();
  }

  save(property: string, value: string | object) {
    const valueString = typeof value === 'object' ? this.cast(value) : value;
    sessionStorage.setItem(property, valueString);
  }

  get(property: string): string | null {
    return sessionStorage.getItem(property);
  }

  clear() {
    sessionStorage.clear();
  }
}
