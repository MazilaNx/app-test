import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../../core/notify.service';
import {UploadService} from '../../core/upload.service';

@Component({
  selector: 'app-btn-upload',
  templateUrl: './btn-upload.component.html',
  styleUrls: ['./btn-upload.component.scss']
})
export class BtnUploadComponent {

  constructor(    private uploadService: UploadService
  ) { }

  uploadFile(event) {
    this.uploadService.update(event.target.files);
  }
}
