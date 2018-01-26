import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalMenuTitleComponent } from './medical-menu-title.component';

describe('MedicalMenuTitleComponent', () => {
  let component: MedicalMenuTitleComponent;
  let fixture: ComponentFixture<MedicalMenuTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalMenuTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalMenuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
