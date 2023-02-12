import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleSimulationComponent } from './schedule-simulation/schedule-simulation.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Add not found component later on
  //{path: '**', },
  // Components
  {
    path: 'schedule-simulation', component: ScheduleSimulationComponent,
    loadChildren: () => import('src/app/schedule-simulation/schedule-simulation.module').then(m => m.ScheduleSimulationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
