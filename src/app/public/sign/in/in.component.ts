import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/_helpers/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-in',
  // templateUrl: './in.component.html',
  styleUrls: ['./in.component.scss'],
  templateUrl: './in.component.html',
})
export class InComponent implements OnInit {
  @Input() isMinimal = true;
  user: Observable<any>;
  constructor(
    private auth: AngularFireAuth,
    private authentication: AuthenticationService,
    private router: Router
  ) {
    this.user = this.auth.user;
  }

  ngOnInit(): void {
    this.auth.user.subscribe((user) => {
      if (user?.uid) this.authentication.login(user);
      else this.authentication.logout(user);
    });
  }
  login() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }
  logout() {
    this.auth.signOut();
  }
}
