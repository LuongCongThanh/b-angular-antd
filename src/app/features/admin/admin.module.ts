import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AgentVqcComponent } from './agent-vqc/agent-vqc.component';


@NgModule({
  declarations: [AgentVqcComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
