import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentformsCreateComponent } from './consentforms-create.component';

describe('ConsentformsCreateComponent', () => {
  let component: ConsentformsCreateComponent;
  let fixture: ComponentFixture<ConsentformsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentformsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentformsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
