import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFiltersFormComponent } from './user-filters-form.component';

describe('UserFiltersFormComponent', () => {
  let component: UserFiltersFormComponent;
  let fixture: ComponentFixture<UserFiltersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFiltersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFiltersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
