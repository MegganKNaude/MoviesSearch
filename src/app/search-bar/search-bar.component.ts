import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {debounceTime, distinctUntilChanged, fromEvent, map} from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements AfterViewInit{
  @ViewChild('inputElement', {static: false}) inputElement: ElementRef | undefined;

  @Output() searchedMovie = new EventEmitter();

  constructor() {
  }

  ngAfterViewInit() {
    // @ts-ignore
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(map((event: any) => {
          return event.target.value;
        })
        , debounceTime(1000)
        , distinctUntilChanged()
      ).subscribe((text: string) => {
      this.searchedMovie.emit({'movieTitle': text})
    });
  }
}
