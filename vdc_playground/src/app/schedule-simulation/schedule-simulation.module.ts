import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleSimulationComponent } from './schedule-simulation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ScheduleSimulationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
        path: '',
        component: ScheduleSimulationComponent,
        }
    ]),
 ],
exports: [],
providers: [],
})
export class ScheduleSimulationModule { }
