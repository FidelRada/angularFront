import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table'
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common'; // Importa CommonModule para *ngIf y *ngFor
import { Persona } from '../../models/persona';
import { RouterModule, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CurrencyPipe } from '@angular/common'; // Importa CurrencyPipe para la moneda
import { PersonaService } from '../services/persona.service';
import { PersonaInput } from '../../models/personaInput';

@Component({
  selector: 'app-personas',
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
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})

export class PersonasComponent {
  personas: Persona[] = [];
  errorMessage: string = '';

  selectedPersona: Persona | null = null;
  displayModal: boolean = false; // Controla la visibilidad del modal
  displayEditModal: boolean = false;

  constructor(private personaService: PersonaService, private router: Router) {}

  ngOnInit(): void {
    console.log('Listar todos los inmuebles');
    this.getAllPersonas();
  }


  getAllPersonas() {
    this.personaService.getPersonas().subscribe({
      next: (response: any) => {
        console.log(JSON.stringify( response.data.getAllInmuebles));
        this.personas = response.data.getAllPersonas; // Asegúrate de que este camino apunte correctamente a los datos de inmuebles
      },
      error: (error) => {
        this.errorMessage = `Ocurrió un error al listar ${error}`;
        console.error(error);
      }
    });
  }

  // Método para manejar el botón de Detalles
  verDetalles(persona: Persona) {
    console.log("Detalles del inmueble:", persona);
    this.selectedPersona = persona;
    this.displayModal = true;
  }

  // Método para manejar el botón de Editar
  editarPersona(persona: Persona) {
    console.log("Editar inmueble:", persona);
    this.selectedPersona = { ...persona }; // Clonar el inmueble para evitar cambios en el original
    this.displayEditModal = true;
  }

  guardarCambios() {
    if (this.selectedPersona) {
      console.log(this.selectedPersona)
      
      if (this.selectedPersona.id ==null) {
        return;
      }

      const personaAct: PersonaInput = {
        ci: this.selectedPersona.ci,
        nombre: this.selectedPersona.nombre,
        apellidoPaterno: this.selectedPersona.apellidoPaterno,
        apellidoMaterno: this.selectedPersona.apellidoMaterno,
        wallet_address_ETH: this.selectedPersona.wallet_address_ETH
      }

      this.personaService.editarPersona(this.selectedPersona.id, personaAct).subscribe({
        next: () => {
                  // Crear una copia de la lista de personas
        const personasActualizadas = [...this.personas];
        // Encontrar el índice de la persona que se está actualizando
        const index = personasActualizadas.findIndex(p => p.id === this.selectedPersona?.id);
        if (index !== -1) {
          // Reemplazar el objeto en la posición encontrada con una nueva copia que incluya los cambios
          personasActualizadas[index] = { ...personasActualizadas[index], ...personaAct };
          // Asignar la lista actualizada al estado
          this.personas = personasActualizadas;
        }
        this.displayEditModal = false; // Cerrar el modal
        },
        error: (error) => {
          console.error('Error al guardar los cambios:', error);
        }
      });
    }
  }

  // Método para manejar el botón de Eliminar
  eliminarPersona(persona: Persona) {
    
    if (confirm(`¿Estás seguro de que deseas eliminar el inmueble con ID ${persona.id}?`)) {
      // Llama al servicio para eliminar el inmueble en la base de datos
      if (persona.id != null) {   
        this.personaService.eliminarPersona(persona.id.toString()).subscribe({
          next: () => {
            //this.getAllPersonas();
            this.personas = this.personas.filter(p => p.id !== persona.id); 
          },
          error: (error) => {
            console.error('Error al eliminar:', error);
          }
        });
      }
    }
    
  }



}
