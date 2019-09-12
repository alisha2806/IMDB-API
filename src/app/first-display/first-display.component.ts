import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { MovieComponent } from '../movie/movie.component';
import { TvShowsComponent } from '../tv-shows/tv-shows.component';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-first-display',
  templateUrl: './first-display.component.html',
  styleUrls: ['./first-display.component.css']
})
export class FirstDisplayComponent implements OnInit {
  public movieData;
  public tvData;

  constructor(private router: Router,
    private dialog: MatDialog,
    private apiService: ApiService) { }

  ngOnInit() {
    this.getMovieGroups();
    this.getTvGroups();
  }

  openDialog(movie) {
    console.log("movie", movie)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    let dialogRef = this.dialog.open(MovieComponent, {
      data: { movieDetails: movie },
    });
  }


  public getMovieGroups() {
    this.apiService.getMovieGroups().subscribe(res => {
      this.movieData = res.results;
      console.log("movieData", this.movieData);
    });
  }


  openDialogs(tv) {
    console.log("tv", tv)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    let dialogRef = this.dialog.open(TvShowsComponent, {
      data: { tvDetails: tv },
    });
  }
  public getTvGroups() {
    this.apiService.getTvGroups().subscribe(res => {
      this.tvData = res.results;
      console.log("tvData", this.tvData);
    });
  }

}
