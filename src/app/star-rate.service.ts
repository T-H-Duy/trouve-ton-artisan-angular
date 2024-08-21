import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarRateService {

  constructor() { }

  // Method to generate a star rating array based on the given artisan's rating
  getRateStars( artisan : any = {}, rate : any = [] ){
    let note = Number(artisan.note)// Convert the artisan's rating to a number

    // Define the CSS classes for full, half, and empty stars using FontAwesome icons
    let fullStar = "fa-solid fa-star"
    let halfStar = "fa-regular fa-star-half-stroke"
    let emptyStar = "fa-regular fa-star" 

     // Handle the case where the rating is a perfect 5.0
    if ( 5-note === 0 ){
      for ( let i = 0; i < 5; i++){
        rate.push(fullStar) // Push 5 full stars into the rate array
      }
    }

    // Handle the case where the rating is between 4.0 and 4.9
    else if ( 5-note < 1 ){ 
      for (let i = 0; i < 4; i++){
        rate.push(fullStar)
      }
      rate.push(halfStar)
     }

    // Handle other ratings less than 4.0
    else{
      // Push full stars corresponding to the integer part of the rating
      for (let i = 0; i < Math.trunc(note); i++){
        rate.push(fullStar)
      }
      
      // If there's a fractional part, push a half star
      if (Math.trunc(note) != note){
        rate.push(halfStar)
      }

      // Fill the remaining stars with empty stars
      for ( let i = 0; i < Math.trunc(5-note); i++){
        rate.push(emptyStar)
      }
    }
    return rate
  }
}

