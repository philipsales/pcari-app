import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedformsCreateComponent } from './medforms-create.component';

describe('MedformsCreateComponent', () => {
  let component: MedformsCreateComponent;
  let fixture: ComponentFixture<MedformsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedformsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedformsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
