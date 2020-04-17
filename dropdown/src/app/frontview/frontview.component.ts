import { Component, 
         OnInit, 
         Input,
        EventEmitter,
        HostListener } from '@angular/core';


@Component({
  selector: 'app-frontview',
  templateUrl: './frontview.component.html',
  styleUrls: ['./frontview.component.scss']
})
export class FrontviewComponent implements OnInit {
  
  @Input() items: string[] = [   ];
  value: any;

  
 constructor() {   
} 
  ngOnInit() {
  }
  
  toggle(){
    console.log("Selected:", );
    
}
// @Input()
//   set insideClick(value: boolean) {
//    // this._state.insideClick = value;
//   }

//  get insideClick(): boolean {
  //  return this._state.insideClick;
 // }
 onChange(SelectedValue){
 // console.log("Selected car", SelectedValue); 
 }
} 
     

  
  

