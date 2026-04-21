import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

   transform(datasize: number, dataType: string = 'KB'): string {
   return (datasize / 1024).toFixed(2) + ' ' + dataType;
  }

}
