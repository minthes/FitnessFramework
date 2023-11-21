import { Component } from '@angular/core';

@Component({
  selector: 'app-mealplans',
  templateUrl: './mealplans.component.html',
  styleUrls: ['./mealplans.component.css']
})
export class MealplansComponent {
  selectedProgram: string | null = null;
showProgramDetails: boolean = false;

selectProgram(program: string) {
  this.selectedProgram = program;
  this.showProgramDetails = true;
}

}
