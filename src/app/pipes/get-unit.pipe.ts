import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getUnit',
  pure: true
})

export class GetUnitPipe implements PipeTransform {
  transform(unitType: string, item: any) {
    if (unitType === 'array') {
      return '[' + item.value.length + ']'
    }
    if (unitType === 'object') {
      return '{' + this.ObjectSize (item.value) + '}'
    }

    return ' : ' + item.value
  }

  ObjectSize(obj) {
    let size = 0;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  }

}
