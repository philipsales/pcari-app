import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcaricaseFormAddComponent } from './pcaricase-form-add.component';

describe('PcaricaseFormAddComponent', () => {
  let component: PcaricaseFormAddComponent;
  let fixture: ComponentFixture<PcaricaseFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcaricaseFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcaricaseFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
