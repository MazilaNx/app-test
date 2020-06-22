import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getType',
  pure: true
})

export class GetTypePipe implements PipeTransform {
  transform(elem: string) {
    if (elem === null) {
      return 'any';
    }
    if (Array.isArray(elem)) {
      return 'array';
    }
    if (typeof(elem) === 'object') {
      return 'object';
    }
    if (typeof(elem) !== 'object' && !Array.isArray(elem)) {
      return 'any';
    }
  }
}
