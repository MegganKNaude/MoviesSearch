import {NgModule} from '@angular/core';
import {MoviesComponent} from "./movies.component";
import {MaterialsModule} from "../materials-styling/materials.module";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {CardComponent} from "./card/card.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    MoviesComponent,
    CardComponent
  ],
  imports: [
    MaterialsModule,
    InfiniteScrollModule,
    CommonModule
  ],
  exports: [
    MoviesComponent
  ]
})
export class MoviesModule {}
