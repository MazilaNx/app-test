import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {NotifyService} from './notify.service';

@Injectable()
export class UploadService {
  file$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(    private readonly router: Router,
                  private notifyService: NotifyService
  ) {
  }
  result: any;

  update(file): void {
    const currentFile = file[0];
    const fileReader = new FileReader();
    fileReader.readAsText(currentFile, 'UTF-8');
    fileReader.onload = () => {
      this.result = fileReader.result;
      if (!this.checkCurrentJson(this.result)) {
        this.notifyService.update('Файл сождержит ошибки. Загрузите другой файл', 'error');
        return false;
      }
      this.file$.next(JSON.parse(this.result));
      this.router.navigate([`processing`]);
      this.notifyService.clear();
      this.notifyService.update('Файл успешно загружен', 'success');
    };
    fileReader.onerror = (error) => {
      this.notifyService.clear();
      this.notifyService.update('Error', 'error');
    };
  }

  checkCurrentJson(file) {
    if (/^[\],:{}\s]*$/.test(file.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
      return true;
    } else {
      return false;
    }
  }
}
