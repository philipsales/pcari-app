import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentFormAddComponent } from './consent-form-add.component';

describe('ConsentFormAddComponent', () => {
  let component: ConsentFormAddComponent;
  let fixture: ComponentFixture<ConsentFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
