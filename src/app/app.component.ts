import { JsonService } from './json.service';
import { Component } from '@angular/core';
// import data from './json/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  datemessage = new Date();
  json:any =[];

  query:any;

  component="form"

  formdata = {
    "fname": "SAMPLE",
    "lname": "USER",
    "email": "sample@gmail.com",
    "phone": "9988776651",
    "message": "This is a sample observation data content passed",
    "options": ["others","others1","others2"]
  }

  constructor(private jsondata:JsonService){
    this.jsondata.loadpost().subscribe((result) => {
      this.json = result
      // console.log(this.json)
    })
  }

  // ngOnInit(){
  //   this.jsondata.loadpost().subscribe((result) => {
  //     this.json = result
  //     // console.log(this.json)
  //   })
  // }

  getdata(queryval:any){
    this.query=queryval
    console.log("queryval",this.query)
    this.jsondata.post(queryval).subscribe((res) => {
      console.log("updated list",res)
      // this.json = []
      this.json = res

      console.log("json", this.json)
    })
  }

}
