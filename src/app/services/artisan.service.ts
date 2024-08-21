import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  // The URL to the JSON file containing artisan data
  private dataUrl: string = "assets/db/datas.json"

  // Inject HttpClient to perform HTTP requests
  constructor(private https: HttpClient) { }
  
  // Method to fetch artisan data from the JSON file
  getData(): Observable<any> {

    return this.https.get(this.dataUrl);// Returns an observable of the HTTP GET request to the specified URL
  }
}
 