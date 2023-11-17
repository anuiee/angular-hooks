import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contentview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contentview.component.html',
  styleUrl: './contentview.component.scss'
})
export class ContentviewComponent implements OnInit {
  ngOnInit(): void {
  }
  public childCounter : number=0; 
  ngAfterViewInit(){
    console.log('ngAfterViewInit called....!');
  
    
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called....!');
    
  }
  // public changeButton():void{

  // }
public incCounter(): void{
  this.childCounter++;
  
  
  
}
}
