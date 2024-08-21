import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor( private router : Router ){}

  toggleMenu(){
    let NavMenu = document.querySelector(".nav-bar__menu")

    if (NavMenu){
      NavMenu.classList.toggle("active")
    }
  }

  // Method to navigate to the results page based on category or search term
  navigateToResult(category:string = "", search:string = ""){
    if (category){
      this.router.navigate(['/result',category])
    }else{
      this.router.navigate(['/result',{search}])
    }
  }
}
 