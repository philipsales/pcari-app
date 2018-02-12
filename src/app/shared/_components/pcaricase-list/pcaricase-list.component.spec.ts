import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcaricaseListComponent } from './pcaricase-list.component';

describe('PcaricaseListComponent', () => {
  let component: PcaricaseListComponent;
  let fixture: ComponentFixture<PcaricaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcaricaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcaricaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
