import { NgModule } from '@angular/core';
import { NotifyService } from './notify.service';
import {UploadService} from './upload.service';

@NgModule({
  imports: [],
  providers: [
    NotifyService,
    UploadService
  ]
})
export class CoreModule { }
