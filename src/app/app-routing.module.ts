import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryLayoutComponent } from './core/layout/primary-layout/primary-layout.component';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';

const routes: Routes = [

  {
    path: 'auth',
    component: PrimaryLayoutComponent,
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    component: MainLayoutComponent,
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
  },

  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
