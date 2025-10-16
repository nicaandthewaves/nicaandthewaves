import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contrataciones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contrataciones.component.html',
  styleUrls: ['./contrataciones.component.scss']
})
export class ContratacionesComponent {
  model = {
    nombre: '',
    telefono: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  submit() {
    console.log('Formulario enviado:', this.model);
    // TODO: llamar a tu backend POST /api/contrataciones
    // this.http.post('/api/contrataciones', this.model).subscribe(...)
    alert('¡Gracias! Te contactamos pronto.');
  }
}
