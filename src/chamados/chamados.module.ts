import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadosComponent } from './chamados.component';

const routes: Routes = [{ path: '', component: ChamadosComponent }];

@NgModule({
  declarations: [ChamadosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ChamadosComponent],
})
export class ChamadosModule {}
