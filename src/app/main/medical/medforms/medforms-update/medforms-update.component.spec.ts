import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedformsUpdateComponent } from './medforms-update.component';

describe('MedformsUpdateComponent', () => {
  let component: MedformsUpdateComponent;
  let fixture: ComponentFixture<MedformsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedformsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedformsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
