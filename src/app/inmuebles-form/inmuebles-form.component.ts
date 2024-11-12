import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Inmueble } from '../../models/inmueble';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


@Component({
  selector: 'app-inmuebles-form',
  standalone: true,
  imports: [DropdownModule, ButtonModule, InputTextModule, ReactiveFormsModule, InputTextareaModule],
  templateUrl: './inmuebles-form.component.html',
  styleUrls: ['./inmuebles-form.component.css']
})
export class InmueblesFormComponent implements OnInit {
  inmuebleForm: FormGroup;
  isEditMode: boolean = false;
  inmuebleId: string | null = null;
  tipos: any[] = [
    { label: 'Casa', value: 'Casa' },
    { label: 'Departamento', value: 'Departamento' },
    { label: 'Terreno', value: 'Terreno' }
  ];
  propietarios: any[] = [
    { nombre: 'Juan Pérez', ci: '12345678', id: '1' },
    { nombre: 'Ana Gómez', ci: '87654321', id: '2' }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apollo: Apollo,

  ) {
    this.inmuebleForm = this.fb.group({
      direccion: ['', Validators.required],
      tipo: ['', Validators.required],
      superficie: ['', Validators.required],
      valor: ['', Validators.required],
      descripcion: [''],
      propietario_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID del inmueble desde la URL
    this.route.paramMap.subscribe(params => {
      this.inmuebleId = params.get('id');
      if (this.inmuebleId) {
        this.isEditMode = true;
        this.loadInmuebleData(this.inmuebleId);
      }
    });

    // Cargar los propietarios para el dropdown
    this.loadPropietarios();
  }

  loadPropietarios(): void {
    
  }

  loadInmuebleData(id: string): void {
    
  }

  onSubmit(): void {
    if (this.inmuebleForm.invalid) {
      return;
    }

    const formValue: Inmueble = this.inmuebleForm.value;

    if (this.isEditMode) {
      this.updateInmueble(formValue);
    } else {
      this.createInmueble(formValue);
    }
  }

  createInmueble(inmueble: Inmueble): void {
    
  }

  updateInmueble(inmueble: Inmueble): void {
    
  }
}
