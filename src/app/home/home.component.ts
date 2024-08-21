import { Component } from '@angular/core';
import { ArtisanCardComponent } from '../artisan-card/artisan-card.component';
import { ArtisanService } from '../artisan.service';
import { SortByNotePipe } from '../sort-by-note.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,ArtisanCardComponent],
  providers: [ArtisanService, SortByNotePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  data: any[] = []

  constructor( private artisanService : ArtisanService) { }

  ngOnInit(){
    this.artisanService.getData().subscribe(
      (data) => {
      this.data = data
    }) 
    
  }

}
