import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule, MatSortModule, MatPaginatorModule, MatPaginator} from '@angular/material'
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { FilterPipe } from './flight/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    
    NavBarComponent,
    ChartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatTableModule, MatSortModule,MatPaginatorModule, 
    RouterModule.forRoot([
      {path:'', component:FlightComponent},
      {path:'home', component:FlightComponent},
      {path:'chart', component:ChartComponent}
    ]),
    BrowserAnimationsModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
