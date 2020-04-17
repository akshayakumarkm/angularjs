import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = [{id: 0, name: "name1"},
  {id: 1, name: "name2"},
  {id: 2, name: "name3"},
  {id: 3, name: "name4"}];
  
}
