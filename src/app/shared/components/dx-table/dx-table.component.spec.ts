import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxTableComponent } from './dx-table.component';

describe('DxTableComponent', () => {
  let component: DxTableComponent;
  let fixture: ComponentFixture<DxTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
