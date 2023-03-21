import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TestComponent } from './test/test.component';
import { FichemaladeComponent } from './fichemalade/fichemalade.component';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './chart/chart.component'; // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    TestComponent,
    FichemaladeComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
