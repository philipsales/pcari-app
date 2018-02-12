import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcaricaseFormListComponent } from './pcaricase-form-list.component';

describe('PcaricaseFormListComponent', () => {
  let component: PcaricaseFormListComponent;
  let fixture: ComponentFixture<PcaricaseFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcaricaseFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcaricaseFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
