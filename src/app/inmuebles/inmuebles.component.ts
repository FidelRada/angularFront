import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table'
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common'; // Importa CommonModule para *ngIf y *ngFor
import { Inmueble } from '../../models/inmueble';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CurrencyPipe } from '@angular/common'; // Importa CurrencyPipe para la moneda
import { InmuebleService } from '../services/inmueble.service';

@Component({
  selector: 'app-inmuebles',
  standalone: true,
  imports: [
    RouterModule,
    CardModule,
    ButtonModule,
    CommonModule, // Agrega CommonModule aquí
    CurrencyPipe,  // Agrega CurrencyPipe aquí
    TableModule,
    DialogModule,
    FormsModule
  ],
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.css']
})
export class InmueblesComponent implements OnInit {
  inmuebles: Inmueble[] = [];
  errorMessage: string = '';

  selectedInmueble: Inmueble | null = null;
  displayModal: boolean = false; // Controla la visibilidad del modal
  displayEditModal: boolean = false;

  constructor(private inmuebleService: InmuebleService) {}

  ngOnInit(): void {
    console.log('Listar todos los inmuebles');
    this.getAllInmuebles();
  }

  getAllInmuebles() {
    this.inmuebleService.getInmuebles().subscribe({
      next: (response: any) => {
        console.log(JSON.stringify( response.data.getAllInmuebles));
        this.inmuebles = response.data.getAllInmuebles; // Asegúrate de que este camino apunte correctamente a los datos de inmuebles
      },
      error: (error) => {
        this.errorMessage = `Ocurrió un error al listar ${error}`;
        console.error(error);
      }
    });
  }

  // Método para manejar el botón de Detalles
  verDetalles(inmueble: Inmueble) {
    console.log("Detalles del inmueble:", inmueble);
    this.selectedInmueble = inmueble;
    this.displayModal = true;
    
  }

  // Método para manejar el botón de Editar
  editarInmueble(inmueble: Inmueble) {
    console.log("Editar inmueble:", inmueble);
    this.selectedInmueble = { ...inmueble }; // Clonar el inmueble para evitar cambios en el original
    this.displayEditModal = true;
  }

  guardarCambios() {
    if (this.selectedInmueble) {
      this.inmuebleService.updateInmueble(this.selectedInmueble).subscribe({
        next: () => {
          this.getAllInmuebles(); // Actualiza la lista
          this.displayEditModal = false; // Cierra el modal
        },
        error: (error) => {
          console.error('Error al guardar los cambios:', error);
        }
      });
    }
  }

  // Método para manejar el botón de Eliminar
  eliminarInmueble(inmueble: Inmueble) {
    /*
    if (confirm(`¿Estás seguro de que deseas eliminar el inmueble con ID ${inmueble.id}?`)) {
      console.log("Eliminar inmueble:", inmueble);
      // Llama al servicio para eliminar el inmueble en la base de datos
      this.inmuebleService.eliminarInmueble(inmueble.id).subscribe({
        next: () => {
          this.inmuebles = this.inmuebles.filter(i => i.id !== inmueble.id); // Remueve el inmueble de la lista local
          console.log("Inmueble eliminado correctamente");
        },
        error: (error) => {
          console.error("Error al eliminar el inmueble", error);
        }
      });
    }
    */
  }
}
