import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private genres = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Drama',
    'Historical',
    'Horror',
    'Science fiction',
    'Western',
  ];
  constructor() {}

  getGenres() {
    return [...this.genres];
  }
}
