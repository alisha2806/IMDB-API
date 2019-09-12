import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../app.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  public tvData;
  constructor(private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.tvData = (this.data.tvDetails)
  }
 
}
