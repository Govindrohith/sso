import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular'; /* import Msal module   */ 
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';




/* defining a instance factory function  */ 
export function MsalInstanceFactory():IPublicClientApplication {
  return new PublicClientApplication ({
    auth:{
      clientId:'7b5d6316-f648-4554-9421-d390dae22174',
      redirectUri:'http://localhost:4200'
    }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],

  /* use providers of provide : MSAL_INSTANCE ,useFactory:MsalInstanceFactory and MsalService   */ 
  providers: [
    {
      provide:MSAL_INSTANCE,
      useFactory:MsalInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule { }
