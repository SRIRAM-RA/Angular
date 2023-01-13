import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

minlength=3;
userdetails: any;
persondetails:any;
service:any;
password:any;
confpassword:any;
state: boolean = false;


submit(details: any){
  console.log("function clicked", details.value)
  // console.log(this.userdetails)
   this.persondetails=details.value
   this.service.updatejson(this.persondetails)
}

confirmpasswordss(value1:any){
  this.confpassword = value1.value
  if(this.confpassword === this.password){
    this.state=true
  }else{
    this.state=false
  }
}

confirmpasswords(value2:any){
  this.password=value2.value
}

constructor(DataService: DataService){
  this.service = DataService
}

}
