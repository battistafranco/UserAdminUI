import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('http') || !control.value.includes('.com')) {
    return { validUrl: true };
  }
  return null;
}