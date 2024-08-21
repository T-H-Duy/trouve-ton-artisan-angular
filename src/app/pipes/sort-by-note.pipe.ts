import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByNote',
  standalone: true
})
export class SortByNotePipe implements PipeTransform {

  transform(artisan: any[], order : number): any[] {
    // Return a sorted array of artisans based on their 'note' (rating)
    return artisan.sort((a:any , b:any)=> {
      // Compare the 'note' property of each artisan, converting it to a number for comparison
      if ( Number(a.note) < Number(b.note) ) { return 1*order} // If a.note is less than b.note, return positive value if order is 1 (ascending) or negative if order is -1 (descending)

      else if ( Number(a.note) > Number(b.note) ) { return -1*order }// If a.note is greater than b.note, return negative value if order is 1 (ascending) or positive if order is -1 (descending)

      else { return 0} // If a.note is equal to b.note, return 0 to maintain the current order
    })
  }

}
