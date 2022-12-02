import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PrimaryLayoutComponent } from './primary-layout/primary-layout.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [MainLayoutComponent, PrimaryLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MainLayoutComponent,
    PrimaryLayoutComponent,
  ]
})
export class LayoutModule { }
