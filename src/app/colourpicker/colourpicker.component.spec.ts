import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourpickerComponent } from './colourpicker.component';

describe('ColourpickerComponent', () => {
  let component: ColourpickerComponent;
  let fixture: ComponentFixture<ColourpickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColourpickerComponent]
    });
    fixture = TestBed.createComponent(ColourpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
