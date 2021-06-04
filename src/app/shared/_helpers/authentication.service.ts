import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user: BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor(private storage: StorageService, private router: Router) {}

  login(user: any){
    this.storeUser(user);
    this.router.navigate([environment.afterLoginPage]);
  }

  logout(user: any){
    this.storeUser(user);
    this.router.navigate([environment.afterLogoutPage]);
  }

  storeUser(user: any) {
    this.storage.setUser(user);
    this.user.next(user);
  }

  getUser(){
    return this.user.getValue();
  }
}
