import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSimulationComponent } from './schedule-simulation.component';

describe('ScheduleSimulationComponent', () => {
  let component: ScheduleSimulationComponent;
  let fixture: ComponentFixture<ScheduleSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleSimulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
