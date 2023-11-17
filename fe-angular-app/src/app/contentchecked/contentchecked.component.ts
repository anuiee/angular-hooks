import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-contentchecked',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contentchecked.component.html',
  styleUrl: './contentchecked.component.scss'
})
export class ContentcheckedComponent {
  public contentElement :any ;
  ngAfterContentInit(){
    console.log("ngAfterContentInit triggerd!!");
    if(this.contentElement){
      console.log('Content element-',this.contentElement.nativeElement);
      
    }
    
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked triggerd!!");
    if(this.contentElement){
      console.log('Content element-',this.contentElement.nativeElement);
      
    }
    
  }
}
