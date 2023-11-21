import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceRoutineComponent } from './exercice-routine.component';

describe('ExerciceRoutineComponent', () => {
  let component: ExerciceRoutineComponent;
  let fixture: ComponentFixture<ExerciceRoutineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciceRoutineComponent]
    });
    fixture = TestBed.createComponent(ExerciceRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
