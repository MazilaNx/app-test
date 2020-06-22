import {Component, Input} from '@angular/core';

@Component({
  selector: 'item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.scss']
})
export class ItemContentComponent {
  @Input() itemRow;
  flagExpand: boolean;

  constructor() {
    this.flagExpand = false;
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

  dataStringify(data) {
    return JSON.stringify(data);
  }
}
