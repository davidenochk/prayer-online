import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  constructor(
    private storage: StorageService,
    private router: Router,
    private auth: AngularFireAuth
  ) {
    this.auth.user.subscribe((response: any) => {
      if (response && response?.user?.uid && !this.storage.getUser()?.uid) this.login();
    });
  }

  login() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response: any) => {
        this.storeUser(response.user);
        this.router.navigate([environment.afterLoginPage]);
      });
  }

  logout() {
    this.storeUser(undefined);
    this.router.navigate([environment.afterLogoutPage]);
  }

  storeUser(user: any) {
    this.storage.setUser(user);
    this.user.next(user);
  }

  getUserObservable() {
    return this.user.asObservable();
  }

  getUser(){
    return this.storage.getUser();
  }

  restore(){
    this.user.next(this.storage.getUser());
  }
}
