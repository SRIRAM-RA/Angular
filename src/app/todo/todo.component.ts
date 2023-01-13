import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title:string= "To-Do";
  task: string[] = [];
  flag: boolean = false;
  msg="sample"

  addtask(event:any){
    this.flag = true;
    console.log(event.target.value)
    this.task.push(event.target.value)
  }

  updatelist(){
    console.log("function clicked")
    console.log(this.msg)
  }

  clearlist(){
    this.flag = false
    this.task =[]
  }

}
