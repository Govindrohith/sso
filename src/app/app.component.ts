import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'microsoft-login';

constructor( private msalService :MsalService ,private spinner:NgxSpinnerService){
}

ngOnInit(): void {
 this.spinner.show(undefined,{
  color:'red'
 });
 setTimeout(() => {
  this.spinner.hide();
 }, 2000);

  this.msalService.instance.handleRedirectPromise().then(
    res=>{
      if(res!==null && res.account !==null){
        this.msalService.instance.setActiveAccount(res.account)  
      }
    }
  )
}

isLoggedIn():boolean{
  return this.msalService.instance.getActiveAccount() !=null
}

login(){
  this.spinner.show()
  this.msalService.loginRedirect();
  // this.msalService.loginPopup().subscribe( (response:AuthenticationResult)=>{
  //   this.msalService.instance.setActiveAccount(response.account)
  // })
}

logout(){
  this.msalService.logout();
}

getName(){
  return this.msalService.instance.getActiveAccount()?.name
}

}
