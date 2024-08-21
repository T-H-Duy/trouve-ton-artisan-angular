import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtisanPageComponent } from './pages/artisan-page/artisan-page.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { NotFoundErrorComponent } from './pages/not-found-error/not-found-error.component';
import { ResponseModalComponent } from './components/response-modal/response-modal.component';

export const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch:'full' },
    { path:'home', component: HomeComponent },
    { path:'artisan/:id', component: ArtisanPageComponent },
    { path:'result', component: SearchResultComponent },
    { path:'result/:category', component: SearchResultComponent },
    { path:'result/:search', component: SearchResultComponent },
    { path:'modal', component: ResponseModalComponent },
    
    { path:'**', component: NotFoundErrorComponent }
];
 

