import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsSelectionPageComponent } from './methods-selection-page.component';

describe('MethodsSelectionPageComponent', () => {
  let component: MethodsSelectionPageComponent;
  let fixture: ComponentFixture<MethodsSelectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodsSelectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodsSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
