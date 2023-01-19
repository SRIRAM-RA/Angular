import { Component } from '@angular/core';
import data from './json/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  datemessage = new Date();
  json = data

  component="form"

  formdata = {
    "fname": "SAMPLE",
    "lname": "USER",
    "email": "sample@gmail.com",
    "phone": "9988776651",
    "message": "This is a sample observation data content passed",
    "options": ["others","others1","others2"]
  }
}
