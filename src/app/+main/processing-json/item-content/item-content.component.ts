import {Component, Input} from '@angular/core';

@Component({
  selector: 'item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.scss']
})
export class ItemContentComponent {
  @Input() itemRow;
  flagExpand: boolean = false;
  currentTypeOf: string;

  constructor() {
    this.flagExpand = false;
  }

  getTypeOf(obj) {
    if (typeof(obj) === 'boolean') {
      this.currentTypeOf = 'boolean';
    }
    if (typeof(obj) === 'string') {
      this.currentTypeOf = 'string';
    }
    if (typeof(obj) === 'object') {
      this.currentTypeOf = 'object';
    }
    if (Array.isArray(obj)) {
      this.currentTypeOf = 'array';
    }
    return this.currentTypeOf;
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

  toggleExpand(event) {
    event.stopPropagation();
    this.flagExpand = !this.flagExpand;
  }

  getCopyString(key, value) {
    return this.dataStringify(key) + ':' + this.dataStringify(value);
  }

  dataStringify(data) {
    return JSON.stringify(data);
  }
}
