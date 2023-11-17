import { AfterViewChecked, Component, ElementRef, Input,OnInit,Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChildComponent } from '../child/child.component';
import { ContentviewComponent } from '../contentview/contentview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,ChildComponent,ContentviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  // @ViewChild('btnCounter')
  // btnCounter!: ElementRef;

  public count : number=0;
  public test: boolean=false;
  public greeting : any;
  public submit : boolean=false;
  public dataValues : boolean=false;
  constructor(){
    console.log("constructor here");
    
  }
 
  
  ngOnInit(){
    console.log("Init fn here");
    console.log("this.btnCounter");
    // this.greeting="hello";
    
  }
  ngDoCheck(){
    console.log('ngDoCheck triggered!!');
    
  }
  /**
   * counter
  void  */
  public counter() : void {
    this.count++;
    this.test =! this.test;
  }

  public change1() :void{
    this.greeting = 'Hey';
    this.submit = !this.submit;
  }
  public change2() :void{
    this.dataValues = !this.dataValues;
  }
}
