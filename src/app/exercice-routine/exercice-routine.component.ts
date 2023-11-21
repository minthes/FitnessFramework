import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice-routine',
  templateUrl: './exercice-routine.component.html',
  styleUrls: ['./exercice-routine.component.css']
})
export class ExerciceRoutineComponent {
  fitnessPrograms: any[] = [
    {
      level: 'Entry Level',
      title: 'Fitness Program 1',
      description: 'A beginner-friendly fitness program to kickstart your fitness journey.',
      duration: '30 minutes'
    },
    {
      level: 'Intermediate Level',
      title: 'Fitness Program 2',
      description: 'An intermediate fitness program to take your fitness to the next level.',
      duration: '45 minutes'
    },
    {
      level: 'Advanced Level',
      title: 'Fitness Program 3',
      description: 'An advanced fitness program for experienced individuals seeking a challenge.',
      duration: '60 minutes'
    }
  ];
  selectedProgram: string | null = null;
  selectProgram(program: string) {
    this.selectedProgram = program;
  }

showProgram(program: string) {
  this.selectedProgram = program;
}
}
