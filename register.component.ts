import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // @Input() usersFromHomeComponent: any;
 @Output() cancelRegister =new EventEmitter();
 model:any={};
 
 resend:boolean=false;
 getotp:boolean=false;
 verifyotp:boolean=false;
 add:number=0;
 otpsuccess:boolean=false;
 count:number=0;
 registerForm: FormGroup;
 validationErrors:string[] = [];
 public phoneExtension:string="+91";
 public otp:number=0;
  constructor(private accountService:AccountService,
    private toastr:ToastrService, private  fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }
initializeForm()
{
  this.registerForm = this.fb.group({
   
    employeename: ['',[ Validators.required,Validators.maxLength(140)]],
   
    city: ['', [Validators.required,Validators.maxLength(200)]],
   
    otp:['', [Validators.required,Validators.pattern("^[0-9]{4}$")]],
   
    phone: ['+91', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    
    emailaddress: ['', [Validators.required,Validators.email,Validators.maxLength(255)]],

    pannumber:['',[Validators.required,Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]]
    
  })
  
}
getOtp()
{
  this.otp =Math.floor(1000+Math.random()*9000);
  
  this.add++;
  if(this.add==4 && !this.registerForm.get('otp').value)
  {
    alert("Otp verification unsucessful. Try after 1 hour....");
    this.getotp= !this.getotp;
    this.verifyotp=!this.verifyotp;
    this.resend=!this.resend;
    this.otpsuccess;
  }
  else{alert("Your OTP "+this.otp);
  }
}
verifyOtp()
{
  if(this.otp==this.registerForm.get('otp').value)
  {
    alert("otp verified successfully");
    this.getotp= !this.getotp;
    this.resend=!this.resend;
    this.verifyotp=!this.verifyotp;
    this.otpsuccess=!this.otpsuccess;
    //this.resend= !
  }
  else{
    alert("Otp verification unsucessful try again");
    this.count++;

    if(this.count==3)
      {
        alert("Please try afetr 1 hour");
         //this.getotp = !this.getotp;
         this.verifyotp=!this.verifyotp;
         this.resend=!this.resend;
         this.otpsuccess;
      }
      else if(this.count==1)
        {
          this.getotp=!this.getotp;
          this.resend
          this.otpsuccess;
        }
    //this.resend=!this.resend;
    
  }
}

 register()
 { this.router.navigateByUrl('/result');
   console.log(this.registerForm.value);
   //console.log(this.model);
   this.accountService.register(this.registerForm.value).subscribe(response =>{
     
     this.router.navigateByUrl('/result');
   },error => {
     //console.response(error);
     this.validationErrors=error;  
    })
    
   
 }
 cancel()
 {
   //console.log('cancelled');
   this.cancelRegister.emit(false);
 }
}
