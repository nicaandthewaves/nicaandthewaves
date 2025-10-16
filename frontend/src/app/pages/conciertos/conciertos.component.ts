import { Component } from '@angular/core';
import { ConciertosTableComponent } from '../../features/conciertos/conciertos-table/conciertos-table.component';

@Component({
  selector: 'app-conciertos',
  standalone: true,
  imports: [ConciertosTableComponent],
  templateUrl: './conciertos.component.html',
  styleUrls: ['./conciertos.component.scss']
})
export class ConciertosComponent {}
