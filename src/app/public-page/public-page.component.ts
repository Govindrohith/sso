import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MsalService } from '@azure/msal-angular';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.css']
})
export class PublicPageComponent implements OnInit {
  registration !:FormGroup;
  constructor(private fb:FormBuilder , private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
     this.registration=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required ]
    })
  }

  loginProcess(){
    this.authService.login(this.registration.value).subscribe(result=>{
      if(result.success){
        console.log(result);
        alert(result.message)
      }
      else{
        alert(result.message)
      }
    })
  }


}
