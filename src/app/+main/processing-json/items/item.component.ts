import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-data-items',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemsComponent {
  @Input() dataItems;
  currentTypeOf: string;
  currentEl: HTMLInputElement;

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

  toggle(event) {
    event.stopPropagation();
    if (event.target.parentElement.nodeName !== 'UL') {
      this.currentEl = event.target.parentElement.parentElement;
    } else {
      this.currentEl = event.target.parentElement;
    }

    if (this.currentEl.classList.contains('active')) {
      this.currentEl.classList.remove('active');
      this.currentEl.classList.add('default');
      this.currentEl.querySelector('.wrapper-expand').classList.remove('active');

    } else {
      this.currentEl.classList.remove('default');
      this.currentEl.classList.add('active');
      this.currentEl.querySelector('.wrapper-expand').classList.add('active');
    }
  }

  getCopyString(key, value) {
    return this.dataStringify(key) + ':' + this.dataStringify(value);
  }

  dataStringify(data) {
    return JSON.stringify(data);
  }
}
