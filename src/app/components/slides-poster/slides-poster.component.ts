import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces';
import { DataMoviesService } from 'src/app/services/data-movies.service';

@Component({
  selector: 'app-slides-poster',
  templateUrl: './slides-poster.component.html',
  styleUrls: ['./slides-poster.component.scss'],
})
export class SlidesPosterComponent implements OnInit {

  @Input() discover: Movies[] = []
  @Input() title: string = '';

  constructor(private dataMovies: DataMoviesService) { }

  ngOnInit(): void {
    this.dataMovies.getDiscover().
    subscribe(
      resp=> {
        console.log(resp)
        this.discover =resp.results
      }
    )
  };

  
}
