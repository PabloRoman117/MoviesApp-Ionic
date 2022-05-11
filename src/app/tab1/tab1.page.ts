import { Component, OnInit } from '@angular/core';
import { DataMoviesService } from '../services/data-movies.service';
import { Observable } from 'rxjs';
import { Movies, ResultTMDB } from '../interfaces/interfaces';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  discover: Movies[] = [];
  popularity: Movies[] = [];

  constructor(private dataMovies: DataMoviesService) { }

  ngOnInit(): void {
    this.dataMovies.getDiscover()
      .subscribe(
        resp => {
          // console.log(resp)
          this.discover = resp.results;
        }

      );

      this.dataMovies.getPopularity()
      .subscribe(
        resp => {
          // console.log(resp)
          this.popularity = resp.results;
        }

      );
  }

  
}
