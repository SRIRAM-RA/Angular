import { Component, Input } from '@angular/core';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  avatar = faUserAstronaut
  datepipe = 'default';

  @Input() datemessage:any

  @Input() jsondata:any
}
