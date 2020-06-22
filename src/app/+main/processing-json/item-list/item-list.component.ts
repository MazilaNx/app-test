import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input() dataItems;
}
