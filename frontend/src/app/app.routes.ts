import { Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { ConciertosComponent } from './pages/conciertos/conciertos.component';
import { NtwComponent } from './pages/ntw/ntw.component';
import { MediaLyricsComponent } from './pages/media-lyrics/media-lyrics.component';
import { ContratacionesComponent } from './pages/contrataciones/contrataciones.component';

export const routes: Routes = [
  { path: '', component: InicioComponent, title: 'Inicio — Nica The Waves' },
  { path: 'conciertos', component: ConciertosComponent, title: 'Conciertos' },
  { path: 'ntw', component: NtwComponent, title: 'N&tW — La Banda' },
  { path: 'media-lyrics', component: MediaLyricsComponent, title: 'Media / Lyrics' },
  { path: 'contrataciones', component: ContratacionesComponent, title: 'Contrataciones' },
  { path: '**', redirectTo: '' }
];
