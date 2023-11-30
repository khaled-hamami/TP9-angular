import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachFilter',
})
export class SerachFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    return list
      ? list.filter((item) =>
          item.nomProduit.toLowerCase().includes(filterText)
        )
      : [];
  }
}
