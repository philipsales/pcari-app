import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseCreateComponent } from './database-create.component';

describe('DatabaseCreateComponent', () => {
  let component: DatabaseCreateComponent;
  let fixture: ComponentFixture<DatabaseCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
