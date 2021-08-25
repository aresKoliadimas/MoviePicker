/* eslint-disable max-len */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private genres = [
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Drama',
    'Family',
    'Fantasy',
    'Film-Noir',
    'History',
    'Horror',
    'Music',
    'Musical',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Sport',
    'Thriller',
    'War',
    'Western',
  ];

  private movies = [
    {
      id: 'm1',
      name: 'The Shawshank Redemption',
      date: 1994,
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      rating: '9.3',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      runtime: '2h 22m'
    },
    {
      id: 'm2',
      name: 'The Godfather',
      date: 1972,
      description:
        'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
      rating: '9.2',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        runtime: '2h 55m'
    },
    {
      id: 'm3',
      name: 'The Godfather: Part II',
      date: 1974,
      description:
        'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
      rating: '9.2',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        runtime: '3h 22m'
    },
    {
      id: 'm4',
      name: 'The Dark Knight',
      date: 2008,
      description:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      rating: '9.0',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
        runtime: '2h 32m'
    },
    {
      id: 'm5',
      name: '12 Angry Men',
      date: 1957,
      description:
        'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
      rating: '9.0',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg',
        runtime: '1h 36m'
    },
  ];

  constructor() {}

  getGenres() {
    return [...this.genres];
  }

  getMovies() {
    return [...this.movies];
  }

  getMovie(movieId: string) {
    return {
      ...this.movies.find(movie => movie.id === movieId)
    };
  }
}
