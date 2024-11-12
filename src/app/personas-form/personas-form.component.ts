import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { ButtonModule } from 'primeng/button';    // Importa el ButtonModule para el botón
import { InputTextModule } from 'primeng/inputtext';  // Importa el InputTextModule para los campos de texto
import { Persona } from '../../models/persona';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule


@Component({
  selector: 'app-personas-form',
  standalone: true,
  imports: [ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './personas-form.component.html',
  styleUrl: './personas-form.component.css'
})
export class PersonasFormComponent {
  personaForm: FormGroup;
  isEditMode: boolean = false;
  personaId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apollo: Apollo
  ) {
    this.personaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido_paterno: [''],
      apellido_materno: [''],
      ci: ['', [Validators.required, Validators.minLength(6)]],
      wallet_address_ETH: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.personaId = params.get('id');
      if (this.personaId) {
        this.isEditMode = true;
        this.loadPersonaData(this.personaId);
      }
    });
  }

  loadPersonaData(id: string) {
    // Lógica para cargar los datos de la persona si estás editando
    // Aquí deberías hacer una consulta GraphQL para obtener los datos
    // y luego poblar el formulario con los datos de la persona
  }

  onSubmit() {
    if (this.personaForm.invalid) {
      return;
    }

    const formValue = this.personaForm.value;

    if (this.isEditMode) {
      this.updatePersona(formValue);
    } else {
      this.createPersona(formValue);
    }
  }

  createPersona(persona: Persona) {
    // Lógica para crear la persona a través de GraphQL
  }

  updatePersona(persona: Persona) {
    // Lógica para actualizar la persona a través de GraphQL
  }
}
