import { Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Subject } from 'rxjs';
import { ChamadosService } from '../chamados/chamados.service';

@Injectable()
export class ShareChamadoResolve implements Resolve<any>, OnDestroy {
  getCount$: Subject<any> = new Subject();

  constructor(private readonly chamadosService: ChamadosService) {
    this.getCount();
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    return {
      getCount$: this.getCount$,
    };
  }

  getCount() {
    this.chamadosService.getCountObservable().subscribe((value) => {
      this.getCount$.next(value);
    });
  }
}
