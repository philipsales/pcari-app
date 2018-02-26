import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcdoncologySearchComponent } from './icdoncology-search.component';

describe('IcdoncologySearchComponent', () => {
  let component: IcdoncologySearchComponent;
  let fixture: ComponentFixture<IcdoncologySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcdoncologySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcdoncologySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
