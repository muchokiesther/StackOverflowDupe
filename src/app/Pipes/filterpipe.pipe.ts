import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      // Modify this condition according to your specific filtering requirements
      return item.userName.toLowerCase().includes(searchText);
    });
  }
}