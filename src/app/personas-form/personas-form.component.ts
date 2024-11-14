import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { ButtonModule } from 'primeng/button';    // Importa el ButtonModule para el botón
import { DropdownModule } from 'primeng/dropdown'; // Importa DropdownModule
import { InputTextModule } from 'primeng/inputtext';  // Importa el InputTextModule para los campos de texto
import { Persona } from '../../models/persona';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { PersonaService } from '../services/persona.service'
import { Role } from '../../models/role';

@Component({
  selector: 'app-personas-form',
  standalone: true,
  imports: [ButtonModule, InputTextModule, ReactiveFormsModule, DropdownModule],
  templateUrl: './personas-form.component.html',
  styleUrl: './personas-form.component.css'
})
export class PersonasFormComponent {
  personaForm: FormGroup;
  isEditMode: boolean = false;
  personaId: string | null = null;

  roles: Role[] = []

  errorMessage: String = "";

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apollo: Apollo,
    private personaService: PersonaService,
  ) {
    this.personaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      ci: ['', [Validators.required, Validators.minLength(6)]],
      wallet_address_ETH: [''],
      rol: ['']
    });

    this.getAllRoles();
    
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

  getAllRoles() {
    this.personaService.listarRoles().subscribe({
      next: (response: any) => {
        this.roles = response.data.getAllRole; // Asegúrate de que este camino apunte correctamente a los datos de inmuebles
        console.log(this.roles);
      },
      error: (error) => {
        this.errorMessage = `Ocurrió un error al listar ${error}`;
        console.error(error);
      }
    });
  }

  loadPersonaData(id: string) {
    // Lógica para cargar los datos de la persona si estás editando
    // Aquí deberías hacer una consulta GraphQL para obtener los datos
    // y luego poblar el formulario con los datos de la persona
  }

  onSubmit() {
    const formValue = this.personaForm.value;
    const roleID = this.personaForm.value.rol;
    console.log(formValue);
      this.createPersona(formValue, roleID);
  }

  createPersona(persona: any, roleID: String) {
    console.log(persona)
    
    const personaNueva: Persona = {
      nombre: persona.nombre, // opcional
      apellidoPaterno: persona.apellidoPaterno,
      apellidoMaterno: persona.apellidoMaterno,
      ci: persona.ci,
      wallet_address_ETH: persona.wallet_address_ETH // opcional
    };
    
    console.log(personaNueva);
    this.personaService.crearPersona(personaNueva).subscribe({
      next: (response: any) => {
        console.log(JSON.stringify( response.data.addPersona));
        const personaCreada: Persona = response.data.addPersona; // Asegúrate de que este camino apunte correctamente a los datos de inmuebles

        console.log(personaCreada);

/*        const username : String = personaCreada.nombre + "_" + personaCreada.ci;

        const password: String = personaCreada.ci;

        const personaID: any = personaCreada.id;

        this.personaService.crearUsuario(personaID, password, roleID, username).subscribe({
          next: (response: any) => {
            this.router.navigate(['/personas']);
          }
        })
          */
      },
      error: (error) => {
        this.errorMessage = `Ocurrió un error al listar ${error}`;
        console.error(error);
      }
    });



  }

}
