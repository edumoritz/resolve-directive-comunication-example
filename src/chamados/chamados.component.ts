import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChamadoDirective } from '../directives/chamado.directive';
import { ChamadosService } from './chamados.service';

@Component({
  selector: 'my-chamados',
  template: `<div>Chamados</div>
  <div>Count: {{ count }}</div>
  `,
})
export class ChamadosComponent
  extends ChamadoDirective
  implements OnInit, OnDestroy
{
  count: number;
  subscription: Subscription[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly chamadosService: ChamadosService
  ) {
    super(activatedRoute);
  }

  ngOnDestroy(): void {
    this.subscription.map((subs) => subs.unsubscribe());
  }

  ngOnInit(): void {
    this.subscription.push(
      this.getCount$.subscribe((value) => {
        console.log('Chamados Component: ', value);
        this.count = value;
      })
    );
  }
}
