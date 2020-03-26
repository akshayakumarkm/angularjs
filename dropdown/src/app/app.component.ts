import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dropdown';
  public parentName= "status";
  public Data=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
}
