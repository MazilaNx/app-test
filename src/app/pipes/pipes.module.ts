import { NgModule } from '@angular/core';
import { GetUnitPipe } from './get-unit.pipe';
import {GetTypePipe} from "./get-type.pipe";

@NgModule({
  declarations: [
    GetUnitPipe,
    GetTypePipe
  ],
  exports: [
    GetUnitPipe,
    GetTypePipe
  ],
})
export class PipesModule {
}
