import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'candidate-table',
    loadChildren: () => import('./candidate-table/candidate-table.module').then((m) => m.CandidateTableModule),
  },
  {
    path: '**',
    redirectTo: 'candidate-table',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
