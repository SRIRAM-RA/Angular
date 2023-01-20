import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  searchvalue: string =''
  searchtext=""
  note:boolean= false

  constructor(public service: JsonService){}


  updatesearchvalue(event:any){
    // console.log(event.target.value)
    this.searchvalue = event.target.value
  }

  avatar = faUserAstronaut
  datepipe = 'default';
  showsearchbtn:boolean = false

  searchbtn(){
    this.showsearchbtn= true
    this.note=true
  }

  @Input() datemessage:any

  @Input() jsondata:any

  @Output() newEvent = new EventEmitter<String>()

  getdata(){
    console.log("clicked")
    this.newEvent.emit(this.searchvalue)
  }

}
