import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiobankingComponent } from './biobanking.component';

describe('BiobankingComponent', () => {
  let component: BiobankingComponent;
  let fixture: ComponentFixture<BiobankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiobankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiobankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
