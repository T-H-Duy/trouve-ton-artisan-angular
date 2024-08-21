import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(  data : any[], category : string , search : string): any[] {
    // Remove all whitespace from the search string for consistent filtering
    let query = search.replace(/\s+/g, '');

    // If both search query and category are empty, return the original data array
    if(!query && !category){
      return data
    } 

    else if (category){
      //filter data by the category
      return data.filter(artisan => artisan.category.toLowerCase().includes(category.toLowerCase()) )
    } 

    else if (query){
      return data.filter(artisan =>{
        // Concatenate name, specialty, and location into a single string for comparison
        let artisanString = artisan.name + artisan.specialty + artisan.location
        // Check if the concatenated string includes the search query
        return artisanString.replace(/\s+/g, '').toLowerCase().includes(query.toLowerCase())
      } )
    }
    // If neither condition matches, return an empty array
    else return []
  }

}
