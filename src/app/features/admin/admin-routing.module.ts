import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentVqcComponent } from './agent-vqc/agent-vqc.component';


const routes: Routes = [
  {
    path: '',
    component: AgentVqcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
