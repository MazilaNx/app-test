import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {UploadService} from '../../core/upload.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-processing-json',
  templateUrl: './processing-json.component.html',
  styleUrls: ['./processing-json.component.scss']
})
export class ProcessingJsonComponent implements OnDestroy {
  public subs: Subscription;
  public data = {};

  constructor(
    private uploadService: UploadService,
    private readonly router: Router,
  ) {
    this.subs = this.uploadService.file$
      .subscribe((file) => {
        if (!file) {
          this.router.navigate([`/`]);
          return false;
        }
        this.data = file;
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
