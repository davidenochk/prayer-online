import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DummyRootComponent } from './shared/dummy-root/dummy-root.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './shared/default/default.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthenticationService } from './shared/_helpers/authentication.service';
import { StorageService } from './shared/_helpers/storage.service';
import { AuthGuard } from './shared/_helpers/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DummyRootComponent,
    DefaultComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [
    AuthenticationService,
    StorageService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
