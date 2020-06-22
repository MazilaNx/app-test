import { NgModule } from '@angular/core';
import { GetUnitPipe } from './get-unit.pipe';

@NgModule({
  declarations: [
    GetUnitPipe,
  ],
  exports: [
    GetUnitPipe,
  ],
})
export class PipesModule {
}
