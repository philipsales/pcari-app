import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcariformListComponent } from './pcariform-list.component';

describe('PcariformListComponent', () => {
  let component: PcariformListComponent;
  let fixture: ComponentFixture<PcariformListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcariformListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcariformListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
