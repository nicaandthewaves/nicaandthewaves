import { Component } from '@angular/core';
import { VideoclipYtComponent } from '../../features/home/videoclip-yt/videoclip-yt.component';
import { AgendaConciertosComponent } from '../../features/home/agenda-conciertos/agenda-conciertos.component';
import { AlbumsFotosComponent } from '../../features/home/albums-fotos/albums-fotos.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [VideoclipYtComponent, AgendaConciertosComponent, AlbumsFotosComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {}
