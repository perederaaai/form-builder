import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CutStringPipe } from '../pipe/cut-string.pipe';



@NgModule({
  declarations: [CustomInputComponent, CutStringPipe],
  imports: [
    CommonModule,
  ],
  exports: [CustomInputComponent, CutStringPipe]
})
export class SharedModule { }
