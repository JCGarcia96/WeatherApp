import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainContentComponent } from './main-content/main-content.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { ForecastHourlyDetailComponent } from './modals/forecast-hourly-detail/forecast-hourly-detail.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherDetailCardComponent } from './weather-detail-card/weather-detail-card.component';


@NgModule({
  declarations: [
    NavBarComponent,
    MainContentComponent,
    FavoritesListComponent,
    ForecastHourlyDetailComponent,
    WeatherCardComponent,
    WeatherDetailCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    NavBarComponent,
    MainContentComponent,
    FavoritesListComponent,
    WeatherDetailCardComponent
  ],
  entryComponents:[WeatherDetailCardComponent]
})
export class ComponentsModule { }
