# Search movies pwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## To run the project:

Run `npm i` to generate the node_modules.
Run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Features of the project:
1. The appication loads a custom angular-materials theme 
2. Upon initial load there is a header search bar and a module which will load the movies below it
3. When the user has yet to enter any input into the search a message displaying "There are currently no active searches..." is shown
4. When the user types in input less than 3 characters a message displaying "Keep typing... I'm thinking" is shown
5. When the user types in 3 or more characters, a list of movies will load as a series of cards
6. Each card animates onto the screen in a series
7. The application has 2 modes (mobile, other) 
8. In mobile view a user must tap on the card for it to turn 
9. The back of each card displays additional information about the movie
10. Infinite scrolling has been added so a user can scroll continuously and new pages are requested and added to the display
11. Sometimes the years would have additional characters - removed in the card component

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
# MovieSearch
