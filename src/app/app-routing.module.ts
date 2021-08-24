import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'genres',
    pathMatch: 'full',
  },
  {
    path: 'genres',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/genres/genres.module').then(
            (m) => m.GenresPageModule
          ),
      },
      {
        path: ':genreName',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./pages/movies/movies.module').then(
                (m) => m.MoviesPageModule
              ),
          },
          {
            path: ':movieId',
            loadChildren: () =>
              import('./pages/movie-details/movie-details.module').then(
                (m) => m.MovieDetailsPageModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
