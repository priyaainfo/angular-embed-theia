import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import theiaEntry from './theia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./style.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit  {
  ngOnInit() {    
}

  ngAfterViewInit(){
    setTimeout(()=>{
      theiaEntry()
    })
}
}
