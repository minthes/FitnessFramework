import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { HealthquizComponent } from './healthquiz/healthquiz.component';

@NgModule({
  declarations: [
    AppComponent,
    BmiCalculatorComponent,
    HealthquizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // Add FormsModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
