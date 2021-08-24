import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
})
export class GenresPage implements OnInit {
  genres: string[];
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.genres = this.movieService.getGenres();
  }

  onGenrePick(genre: string) {
    console.log(genre);
  }
}
