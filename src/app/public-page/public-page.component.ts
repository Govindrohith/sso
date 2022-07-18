import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.css']
})
export class PublicPageComponent implements OnInit {

  constructor(private msalService:MsalService) { }

  ngOnInit(): void {
  }

  // getName(){
  //   return this.msalService.instance.getActiveAccount()?.name
  // }

}
