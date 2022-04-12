import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadoDirective } from '../../directives/chamado.directive';
import { ShareChamadoResolve } from '../../directives/chamado.resolve';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      chamados: ShareChamadoResolve,
    },
    children: [
      {
        path: 'chamados',
        loadChildren: () =>
          import('../../chamados/chamados.module').then(
            (m) => m.ChamadosModule
          ),
        resolve: {
          chamados: ShareChamadoResolve,
        },
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [DashboardComponent, ChamadoDirective],
  bootstrap: [DashboardComponent],
  providers: [ShareChamadoResolve],
})
export class DashboardModule {}
