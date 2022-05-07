import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intoArray'
})
export class IntoArrayPipe implements PipeTransform {

  transform(value: number): any {
    return new Array(value);
  }

}
