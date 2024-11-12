import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Inmueble } from '../../models/inmueble';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-inmuebles',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './inmuebles.component.html',
  styleUrl: './inmuebles.component.css'
})
export class InmueblesComponent {
  inmuebles: Inmueble[] = [];

  ngOnInit():void{
    console.log("Listar todos los inmuebles")
  }

}
