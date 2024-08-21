import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';
import { StarRateService } from '../../services/star-rate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artisan-page',
  standalone: true,
  imports: [ContactFormComponent, CommonModule],
  templateUrl: './artisan-page.component.html',
  styleUrl: './artisan-page.component.scss'
})
export class ArtisanPageComponent {
  artisan : any = {}
  rate : any[] = []

  constructor( 
    private route : ActivatedRoute,
    private artisanService : ArtisanService,
    private starRateService : StarRateService
   ){ }

   ngOnInit(){
    this.getArtisan()
   }

  getArtisan(){
    this.route.params.subscribe(params => {
      let artisanId = params['id']
      this.artisanService.getData().subscribe(
        data => {
          this.artisan = data[artisanId-1]
          this.starRateService.getRateStars(this.artisan, this.rate) 
        }
      )
    })
  } 
}
 