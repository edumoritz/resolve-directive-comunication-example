import { Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Directive({ selector: '[appChamados]' })
export class ChamadoDirective {
  get getCount$(): Subject<any> {
    return (this.actRouter as any).snapshot.data.chamados
      .getCount$ as Subject<any>;
  }

  constructor(public actRouter: ActivatedRoute) {}
}
