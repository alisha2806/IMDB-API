import { Component, OnInit, Inject  } from '@angular/core';
import { ApiService } from '../app.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
 
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movieData;
  constructor(private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.movieData = (this.data.movieDetails)
  }

}
