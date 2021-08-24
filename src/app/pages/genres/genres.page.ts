import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
})
export class GenresPage implements OnInit {
  genres = [
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

  ngOnInit() {}

  onGenrePick(genre: string) {
    console.log(genre);
  }
}
