import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthquizComponent } from './healthquiz.component';

describe('HealthquizComponent', () => {
  let component: HealthquizComponent;
  let fixture: ComponentFixture<HealthquizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthquizComponent]
    });
    fixture = TestBed.createComponent(HealthquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
