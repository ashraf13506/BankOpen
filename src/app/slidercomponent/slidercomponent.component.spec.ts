import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidercomponentComponent } from './slidercomponent.component';

describe('SlidercomponentComponent', () => {
  let component: SlidercomponentComponent;
  let fixture: ComponentFixture<SlidercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidercomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
