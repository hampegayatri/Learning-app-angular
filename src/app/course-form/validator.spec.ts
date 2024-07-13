import { FormControl } from '@angular/forms';
import { noNumbersValidator } from './validators';

describe('Custom Validators', () => {
  describe('noNumbersValidator', () => {
    it('should return null when input contains only letters', () => {
      const control = new FormControl('CourseName');
      const result = noNumbersValidator(control);
      expect(result).toBeNull();
    });

    it('should return validation error when input contains numbers', () => {
      const control = new FormControl('Course123');
      const result = noNumbersValidator(control);
      expect(result).toEqual({ noNumbers: true });
    });

   
  });
});
