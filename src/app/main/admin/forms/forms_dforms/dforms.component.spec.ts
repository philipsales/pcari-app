import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DformsComponent } from './dforms.component';

describe('DformsComponent', () => {
  let component: DformsComponent;
  let fixture: ComponentFixture<DformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
