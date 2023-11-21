import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent {
  weight: number = 0;      // Initialize with a default value
  height: number = 0;      // Initialize with a default value
  bmiResult: number | null = null;

  calculateBMI() {
    if (this.weight && this.height) {
      this.bmiResult = this.weight / (this.height * this.height);
    } else {
      this.bmiResult = null;
    }
  }
  }
