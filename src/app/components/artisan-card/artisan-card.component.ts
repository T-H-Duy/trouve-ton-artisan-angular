import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { StarRateService } from '../../services/star-rate.service';

@Component({
  selector: 'app-artisan-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './artisan-card.component.html',
  styleUrl: './artisan-card.component.scss'
})

export class ArtisanCardComponent {
  @Input() artisan: any
  rate: any[] = []

  constructor( 
    private router : Router,
    private starRateService : StarRateService
   ){}

  ngOnInit(){
    this.starRateService.getRateStars(this.artisan, this.rate)
  }

  navigateToArtisanPage(){
    this.router.navigate(['/artisan', this.artisan.id])
  }

  
}
