import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  loadedMovie: any;
  movieId: string;
  dum = [1, 2, 3, 4, 5];

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const movieId = paramMap.get('movieId');
      this.loadedMovie = this.movieService.getMovie(movieId);
    });
  }
}
