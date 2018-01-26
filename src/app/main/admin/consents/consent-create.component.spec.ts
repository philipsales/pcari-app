import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentCreateComponent } from './consent-create.component';

describe('ConsentCreateComponent', () => {
  let component: ConsentCreateComponent;
  let fixture: ComponentFixture<ConsentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
