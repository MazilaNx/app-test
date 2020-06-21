import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UploadJsonComponent} from './+main/upload-json/upload-json.component';
import {ProcessingJsonComponent} from './+main/processing-json/processing-json.component';


const routes: Routes = [
  {
    path: '',
    component: UploadJsonComponent,
  },
  {
    path: 'processing',
    component: ProcessingJsonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
