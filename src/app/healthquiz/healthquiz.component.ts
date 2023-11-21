import { Component } from '@angular/core';

@Component({
  selector: 'app-healthquiz',
  templateUrl: './healthquiz.component.html',
  styleUrls: ['./healthquiz.component.css']
})
export class HealthquizComponent {
  questions: any[] = [
    {
      text: 'How many glasses of water do you typically drink in a day?',
      options: ['Less than 4 glasses', '4-6 glasses', '7-8 glasses', 'More than 8 glasses']
    },
    {
      text: 'How often do you engage in physical exercise?',
      options: ['Rarely or never', '1-2 times a week', '3-4 times a week', 'Every day']
    },
    {
      text: 'What is your usual sleep routine?',
      options: ['Less than 6 hours', '6-8 hours', '8-10 hours', 'More than 10 hours']
    },
    {
      text: 'How frequently do you consume sugary beverages?',
      options: ['Daily', '2-3 times a week', 'Once a week', 'Rarely or never']
    },
    {
      text: 'How often do you include fruits and vegetables in your meals?',
      options: ['Rarely or never', '1-2 servings a day', '3-4 servings a day', '5 or more servings a day']
    }
    // Add more questions as needed
  ];

  selectedOptions: string[] = [];
  currentQuestionIndex: number = 0;
  quizSubmitted: boolean = false; // Flag to track whether the quiz has been submitted

  get currentQuestion(): any {
    return this.questions[this.currentQuestionIndex];
  }

  showQuestionBox: boolean = true;

  nextQuestion() {
    this.currentQuestionIndex++;
  
    if (this.currentQuestionIndex === this.questions.length) {
      this.quizSubmitted = true; // Update quizSubmitted flag
    }
  }
  

  submitQuiz() {
    // Logic to evaluate and display the quiz results
    console.log('Selected Options:', this.selectedOptions);
    // You can add more logic to calculate the score and provide feedback to the user
  }
  

}
