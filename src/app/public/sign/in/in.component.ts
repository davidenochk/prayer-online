import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/_helpers/authentication.service';

@Component({
  selector: 'app-in',
  // templateUrl: './in.component.html',
  styleUrls: ['./in.component.scss'],
  templateUrl: './in.component.html',
})
export class InComponent implements OnInit {
  @Input() isMinimal = true;
  user: Observable<any>;
  constructor(private authentication: AuthenticationService) {
    this.user = this.authentication.getUserObservable();
    this.user.subscribe(res => console.log(res));
  }

  ngOnInit(): void {}
  login() {
    this.authentication.login();
  }
  logout() {
    this.authentication.logout();
  }
}
