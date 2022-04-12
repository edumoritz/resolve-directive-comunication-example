import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChamadosService {
  private subjectCount$ = new Subject<any>();
  private count = 0;

  public connect() {
    console.log('Conect');
    this.subjectCount$.next(this.count);
  }

  public execFakeSocketIO(value: number) {
    this.subjectCount$.next(this.count + value);
  }

  public getCountObservable() {
    return this.subjectCount$.asObservable();
  }

  public updateCountObservable() {
    return this.subjectCount$;
  }
}
