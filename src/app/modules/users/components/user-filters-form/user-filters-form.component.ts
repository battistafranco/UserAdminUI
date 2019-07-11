import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-filters-form',
  templateUrl: './user-filters-form.component.html',
  styleUrls: ['./user-filters-form.component.scss']
})
export class UserFiltersFormComponent implements OnInit {
  public form: FormGroup;
  public filterList: FormArray;

  get filters() {
    return this.form.get('filters') as FormArray;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({   
      filters: this.fb.array([this.createFilter()])
    });

    // set filterList to this field
    this.filterList = this.form.get('filters') as FormArray;
  }

  // filter formgroup
  createFilter(): FormGroup {
    return this.fb.group({     
      filterLabel: ['Cuenta Compensacion'],
      filterValue: [null, Validators.compose([Validators.required])]
    });
  }

  // add a filter form group
  addFilter() {
    this.filterList.push(this.createFilter());
  }

  // remove filter from group
  removeFilter(index) {
    this.filterList.removeAt(index);
  }

  // get the formgroup under filters form array
  getFiltersFormGroup(index): FormGroup {    
    const formGroup = this.filterList.controls[index] as FormGroup;
    return formGroup;
  }

  // method triggered when form is submitted
  submit() {
    
    console.log(this.form.value);
  }
}
