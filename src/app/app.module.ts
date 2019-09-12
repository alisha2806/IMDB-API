import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FirstDisplayComponent } from './first-display/first-display.component';
import { MovieComponent } from './movie/movie.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiService } from './app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { MatDialogModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    FirstDisplayComponent,
    MovieComponent,
    TvShowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [MovieComponent]
})
export class AppModule { }
