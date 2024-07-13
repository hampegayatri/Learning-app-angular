import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

// Custom validator to ensure the course name doesn't contain numbers
export function noNumbersValidator(control: AbstractControl): { [key: string]: any } | null {
  const valid = /^[A-Za-z\s]+$/.test(control.value);
  return valid ? null : { noNumbers: true };
}

// Custom validator to ensure the start date is in the future
export function futureDateValidator(control: AbstractControl): { [key: string]: any } | null {
  const currentDate = new Date();
  const selectedDate = new Date(control.value);
  return selectedDate > currentDate ? null : { futureDate: true };
}
