import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesonalDataFormComponent } from './pesonal-data-form.component';

describe('PesonalDataFormComponent', () => {
  let component: PesonalDataFormComponent;
  let fixture: ComponentFixture<PesonalDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesonalDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesonalDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
