import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input() dataItems;
  currentTypeOf: string;

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
}
