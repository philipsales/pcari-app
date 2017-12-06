import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalMenuComponent } from './medical-menu.component';

describe('MedicalMenuComponent', () => {
  let component: MedicalMenuComponent;
  let fixture: ComponentFixture<MedicalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
