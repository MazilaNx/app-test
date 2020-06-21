import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NotificationMessageComponent } from './notification-message/notification-message.component';
import {TextCopyDirective} from '../_directives/text-copy.directive';
import {BtnUploadComponent} from './btn-upload/btn-upload.component';
import {DragDropDirective} from '../_directives/drag-drop.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TextCopyDirective,
    DragDropDirective,
    NotificationMessageComponent,
    BtnUploadComponent
  ],
  exports: [
    TextCopyDirective,
    DragDropDirective,
    NotificationMessageComponent,
    BtnUploadComponent
  ]
})
export class UiModule {}
