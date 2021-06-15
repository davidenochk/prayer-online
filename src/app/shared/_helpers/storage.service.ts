import { Injectable } from '@angular/core';
const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

@Injectable()
export class StorageService {

  storageData: any = {};
  constructor() { }

  set(key: string, data: any) {
    isBrowser ? localStorage.setItem(key, JSON.stringify(data)) : this.storageData[key] = JSON.stringify(data);
  }

  get(key: string) {
    const value = isBrowser ? localStorage.getItem(key) : this.storageData[key];
    return (value !== undefined && value !== null && value !== "undefined" && value !== "null") ? JSON.parse(value) : value;
  }

  remove(key: string) {
    isBrowser ? localStorage.removeItem(key) : delete this.storageData[key];
  }

  getUser() {
    return this.get('user-auth');
  }

  setUser(user: any) {
    this.set('user-auth', user)
  }

  removeUser() {
    this.remove('user-auth')
  }
}
