import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSectionArrayComponent } from './form-section-array.component';

describe('FormSectionArrayComponent', () => {
  let component: FormSectionArrayComponent;
  let fixture: ComponentFixture<FormSectionArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormSectionArrayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSectionArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
