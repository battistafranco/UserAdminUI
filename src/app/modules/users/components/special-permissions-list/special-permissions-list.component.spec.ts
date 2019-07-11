import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPermissionsListComponent } from './special-permissions-list.component';

describe('SpecialPermissionsListComponent', () => {
  let component: SpecialPermissionsListComponent;
  let fixture: ComponentFixture<SpecialPermissionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialPermissionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPermissionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
