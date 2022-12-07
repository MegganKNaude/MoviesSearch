import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showSpinner: boolean = false;
  public textToSearch: string = '';

  constructor() {}

  setSearchedMovie($event: { movieTitle: string; }) {
    this.textToSearch = $event.movieTitle;
  }
}
