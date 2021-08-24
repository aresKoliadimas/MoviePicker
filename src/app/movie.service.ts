import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  endpoint = 'http://www.omdbapi.com/';
  apiKey = '930a1fde';

  constructor() {}
}
