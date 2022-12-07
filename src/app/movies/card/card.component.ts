import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Movie} from '../types/movie.type';
import {MoviesService} from '../movies.service';
import {fromEvent, Observable, Subject, Subscription, takeUntil} from 'rxjs';
import {MovieDetail} from '../types/movie-detail.type';
import { FLIPCARD } from '../animations/movie-animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [FLIPCARD],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() movie?: Movie;

  public showAdditionalInfo: boolean = false;
  public unsubscribe = new Subject();
  public movieDetails: MovieDetail = {}
  public isMobileLayout: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  private resizeObservable: Observable<Event> | undefined
  private resizeSubscription: Subscription | undefined

  constructor(public moviesService: MoviesService) {}

  ngOnInit() {
    this.getAdditionalInformation();
    this.resizeObservable = fromEvent(window, 'resize');
    this.resizeSubscription = this.resizeObservable.subscribe(event => {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.isMobileLayout = true;
      } else {
        this.isMobileLayout = false;
      }
    })
  }

  getAdditionalInformation() {
    this.moviesService.getMovieDetails(this.movie?.imdbID)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((movieDetails: MovieDetail) => {
        this.movieDetails = movieDetails;
      })
  }

  removeSpecialCharacters(year?: string) {
    return year?.replace(/^a-zA-Z0-9 ]/g, '')
  }

  toggleExtraInfo() {
    this.showAdditionalInfo = !this.showAdditionalInfo;
  }

  ngOnDestroy() {
    this.unsubscribe.next(void 0);
    this.unsubscribe.complete();
  }
}
