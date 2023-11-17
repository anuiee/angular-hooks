import { Component,Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentcheckedComponent } from '../contentchecked/contentchecked.component';
import { log } from 'console';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule,RouterModule,ContentcheckedComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit , OnChanges {
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  // @Input() dataprop!:boolean;
  @Input() data : any;
  @Input() data2: boolean = false;


}
