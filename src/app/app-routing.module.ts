import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { HealthquizComponent } from './healthquiz/healthquiz.component';
import { ExerciceRoutineComponent } from './exercice-routine/exercice-routine.component';

const routes: Routes = [{path: 'BMI Calculator', component: BmiCalculatorComponent},{path:'Health Quiz', component:HealthquizComponent}
,{path:'Exercise Routines', component:ExerciceRoutineComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
