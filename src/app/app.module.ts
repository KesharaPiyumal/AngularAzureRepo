import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthenticationGuard, MsAdalAngular6Module} from 'microsoft-adal-angular6';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MsAdalAngular6Module.forRoot({
      tenant: '986902b9-ea53-4e21-9d19-293558bd3b13',
      clientId: '9636634b-4013-4a0b-9fed-762639aaa80c',
      redirectUri: 'https://ysangularapp.azurewebsites.net/#/pages/dashboard',
      endpoints: {
        api: null,
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: '<localStorage / sessionStorage>',
      postLogoutRedirectUri: 'https://ysangularapp.azurewebsites.net/#/pages/dashboard',
    }),
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
