import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MoviesService} from './movies.service';
import {Subject, takeUntil} from 'rxjs';
import {Movies} from './types/movie.type';
import {FADEIN} from './animations/movie-animation';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  animations: [FADEIN]
})

export class MoviesComponent implements OnChanges {
  @Input() textToSearch: any;

  public unsubscribe = new Subject<any>();
  public movies: Movies = {};
  public page: number = 1;
  public tooShort: boolean = false;
  public showType: string = 'all';

  constructor(public moviesService: MoviesService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.checkAndFetchMovies(changes['textToSearch'].currentValue.length);
  }

  checkAndFetchMovies(movieStringToCheck: any) {
    if(movieStringToCheck == 0) {
      this.movies = {};
      this.tooShort = false;
    } else if (movieStringToCheck <= 2) {
      this.movies = {};
      this.tooShort = true;
    } else if (movieStringToCheck > 2) {
      this.movies = {};
      this.tooShort = false;
      this.getMovies();
    }
  }

  getMovies() {
    this.page = 1;
    this.moviesService.getMovies(this.textToSearch, this.page, this.showType)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((movies: Movies) => {
        this.movies = movies;
      })
  }

  onScroll(): void {
    this.moviesService.getMovies(this.textToSearch, ++this.page, this.showType)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((movies: Movies) => {
        // @ts-ignore
        this.movies.Search = [...this.movies.Search, ...movies.Search];
      });
  }

  onToggleChange($event: string) {
    this.showType = $event;
    this.checkAndFetchMovies(this.textToSearch.length);
  }

  isEmptyObject(obj: {}) {
    return (obj && (Object.keys(obj).length === 0));
  }
}
