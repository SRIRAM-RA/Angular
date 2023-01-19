import { Component, Input } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  icon = faCaretDown
  check = faCircleCheck
  dropdownchoice = ""
  showdropdown:boolean = true
  validatestate:boolean=true;
  optionvalidstate:boolean = true
  phonevalidstate:boolean = true
  msgvalidstate:boolean = true
  emailvalidstate:boolean = true
  formclear:boolean = true
  showhideform: boolean = true
  showvalidations:boolean = false

  showdrop(){
    if(this.showdropdown == true){
      this.showdropdown =false
    }else{
      this.showdropdown = true
    }
  }

  validate(details:any){
    // console.log("second det",details.value)
    if(details.value.opt_choice == ''){
      this.formclear = false
      this.optionvalidstate = false
    }
    if(details.value.f_name =='' || details.value.l_name ==''){
      this.formclear = false
      this.validatestate = false
    }
    if(details.value.email == ''){
      this.formclear = false
      this.emailvalidstate = false
    }
    if(details.value.phone == ''){
      this.formclear = false
      this.phonevalidstate = false
    }
    if(details.value.message == ''){
      this.formclear = false
      this.msgvalidstate = false
    }
    if(details.value.opt_choice && details.value.phone && details.value.email && details.value.f_name && details.value.l_name && details.value.message != ''){
      this.formclear = true
      this.phonevalidstate = true
      this.emailvalidstate = true
      this.validatestate = true
      this.optionvalidstate = true
      this.msgvalidstate = true
    }
  }

  submit(details:any){
    // console.log(details.value)
    this.showvalidations= true
    if(details.value.opt_choice == ''){
      this.formclear = false
      this.optionvalidstate = false
    }
    if(details.value.f_name =='' || details.value.l_name ==''){
      this.formclear = false
      this.validatestate = false
    }
    if(details.value.email == ''){
      this.formclear = false
      this.emailvalidstate = false
    }
    if(details.value.phone == ''){
      this.formclear = false
      this.phonevalidstate = false
    }
    if(details.value.message == ''){
      this.formclear = false
      this.msgvalidstate = false
    }
    if(details.value.opt_choice && details.value.phone && details.value.email && details.value.f_name && details.value.l_name && details.value.message != ''){
      this.showhideform = false
    }
  }

  reload(){
    window.location.reload()
  }

  updatevalue(event: any){
    // console.log(event.target.innerHTML)
    this.dropdownchoice = event.target.innerHTML
    this.showdrop()
  }


  @Input() parentMessage:any;

}
