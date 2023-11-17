import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentviewComponent } from './contentview.component';

describe('ContentviewComponent', () => {
  let component: ContentviewComponent;
  let fixture: ComponentFixture<ContentviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
