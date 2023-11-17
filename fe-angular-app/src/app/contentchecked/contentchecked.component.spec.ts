import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcheckedComponent } from './contentchecked.component';

describe('ContentcheckedComponent', () => {
  let component: ContentcheckedComponent;
  let fixture: ComponentFixture<ContentcheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentcheckedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentcheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
