import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChamadosService } from '../../chamados/chamados.service';
import { ChamadoDirective } from '../../directives/chamado.directive';

@Component({
  selector: 'my-dash',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent
  extends ChamadoDirective
  implements OnDestroy, OnInit
{
  text = 'Loading...';

  subscription: Subscription[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly chamadosService: ChamadosService
  ) {
    super(activatedRoute);
    // this.activatedRoute.params.subscribe((param: any) => console.log(param));
    // this.activatedRoute.data.subscribe((data: any) =>
    //   console.log(data.chamados)
    // );
  }

  ngOnInit() {
    this.subscription.push(
      this.getCount$.subscribe((value) => {
        console.log('Dashboard: ', value);
        this.text = 'Count: ' + value;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.map((subs) => subs.unsubscribe());
  }
}
