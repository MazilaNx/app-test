import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {UiModule} from '../ui/ui.module';
import {CoreModule} from '../core/core.module';
import {UploadJsonComponent} from './upload-json/upload-json.component';
import {ProcessingJsonComponent} from './processing-json/processing-json.component';
import {NotifyService} from '../core/notify.service';
import {ItemsComponent} from './processing-json/items/item.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    UiModule,
  ],
  declarations: [
    UploadJsonComponent,
    ProcessingJsonComponent,
    ItemsComponent
  ],
  exports: [],
  providers: [
    NotifyService
  ]
})
export class MainModule {}
