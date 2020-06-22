import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {UploadService} from '../../core/upload.service';

@Component({
  selector: 'app-upload-json',
  templateUrl: './upload-json.component.html',
  styleUrls: ['./upload-json.component.scss']
})
export class UploadJsonComponent {
  constructor(
    private readonly router: Router,
    private uploadService: UploadService,
  ) {
  }

  uploadFile(event) {
    this.uploadService.update(event);
  }
}
