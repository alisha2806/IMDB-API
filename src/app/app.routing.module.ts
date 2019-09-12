import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstDisplayComponent } from './first-display/first-display.component';
import { MovieComponent } from './movie/movie.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';


const routes: Routes = [
  { path: 'firstdisplay', component: FirstDisplayComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: '', component: FirstDisplayComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
