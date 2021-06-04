import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user: BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor(private storage: StorageService) {}

  storeUser(user: any) {
    this.storage.setUser(user);
    this.user.next(user);
  }

  getUser(){
    return this.user.getValue();
  }
}
