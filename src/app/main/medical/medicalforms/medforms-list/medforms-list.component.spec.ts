import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedformsListComponent } from './medforms-list.component';

describe('MedformsListComponent', () => {
  let component: MedformsListComponent;
  let fixture: ComponentFixture<MedformsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedformsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedformsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
