import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/_helpers/authentication.service';

@Component({
  selector: 'app-in',
  // templateUrl: './in.component.html',
  styleUrls: ['./in.component.scss'],
  template: `
    <div *ngIf="user | async as user; else showLogin">
      <h1>Hello {{ user.displayName }}!</h1>
      <button (click)="logout()">Logout</button>
    </div>
    <ng-template #showLogin>
      <p>Please login.</p>
      <button (click)="login()">Login with Google</button>
    </ng-template>
  `,
})
export class InComponent implements OnInit {
  user: Observable<any>;
  constructor(
    private auth: AngularFireAuth,
    private authentication: AuthenticationService
  ) {
    this.user = this.auth.user;
  }

  ngOnInit(): void {
    this.auth.user.subscribe((user) => {
      this.authentication.storeUser(user);
    });
  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
}
