import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthenticationService } from 'src/app/shared/_helpers/authentication.service';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  mobileQuery: MediaQueryList;
  app: any = environment.app;
  private _mobileQueryListener: () => void;
  fillerNav = [
    { path: '/home', label: 'Home', icon: 'home' },
    { path: '/post', label: 'Post', icon: 'add' },
    { path: '/admin/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/groups', label: 'Groups', icon: 'list' },
    { path: '/sign/in', label: 'Login', icon: 'security' },
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private auth: AuthenticationService,
    private title: Title) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.auth.restore();
    this.title.setTitle(environment.app.name);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
