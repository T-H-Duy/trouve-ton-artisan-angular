import { Component } from '@angular/core';
import { ArtisanCardComponent } from '../../components/artisan-card/artisan-card.component';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CommonModule } from '@angular/common';
import { SortByNotePipe } from '../../pipes/sort-by-note.pipe';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [ CommonModule, ArtisanCardComponent, FilterPipe, SortByNotePipe],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss'
})
export class SearchResultComponent {
  category : string = ""
  search : string = ""
  data : any = []
  order : number = 0 // Variable to manage the sorting order of the data

  constructor( 
    private route : ActivatedRoute,
    private artisanService : ArtisanService
  ){ }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.category = params['category'] || ""
      this.search = params['search'] || ""
      this.getData()
    })
  }

  getData(){
    this.artisanService.getData().subscribe(
      (data) => {
      this.data = data
    })
  }
  
  // Method to set the sorting order for the artisan data
  sortArtisan(order : number){
    this.order = order
  }


}
