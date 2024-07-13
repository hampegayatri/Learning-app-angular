// src/app/uppercase.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {
  transform(value: any): any {
    return value.toUpperCase();
  }
}
