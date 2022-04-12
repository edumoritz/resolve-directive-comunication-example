import { Component, OnInit } from '@angular/core';
import { ChamadosService } from '../chamados/chamados.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private chamadosService: ChamadosService) {}

  ngOnInit(): void {
    setTimeout(() => this.chamadosService.connect(), 3000);

    setTimeout(() => this.chamadosService.execFakeSocketIO(1), 5000);
    setTimeout(() => this.chamadosService.execFakeSocketIO(2), 8000);
  }
}
