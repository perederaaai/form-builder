import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'cutString'})
export class CutStringPipe implements PipeTransform {
  transform(value: string): any {
   return value.slice(0,15)
  }
}
