import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {UiModule} from '../ui/ui.module';
import {CoreModule} from '../core/core.module';
import {UploadJsonComponent} from './upload-json/upload-json.component';
import {ProcessingJsonComponent} from './processing-json/processing-json.component';
import {NotifyService} from '../core/notify.service';
import {ItemListComponent} from './processing-json/item-list/item-list.component';
import {ItemContentComponent} from "./processing-json/item-content/item-content.component";

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
    ItemListComponent,
    ItemContentComponent
  ],
  exports: [],
  providers: [
    NotifyService
  ]
})
export class MainModule {}
