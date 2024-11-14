import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MenuModule, ToastModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  items: MenuItem[] | undefined;
    
  ngOnInit() {
      this.items = [
        {
            label: 'Home',
            items: [
                {
                    label: 'Dashboard',
                    icon: 'pi pi-search',
                    routerLink: ['/']
                }
            ]
        },    
        {
              label: 'Personas',
              items: [
                  {
                      label: 'Nuevo',
                      icon: 'pi pi-plus',
                      routerLink: ['/formulariopersonas/:id']
                  },
                  {
                      label: 'Todos',
                      icon: 'pi pi-search',
                      routerLink: ['/personas']
                  },
                  /*{
                      label: 'Clientes',
                      icon: 'pi pi-search',
                      routerLink: ['/clientes']
                  },
                  {
                      label: 'Empleados',
                      icon: 'pi pi-search',
                      routerLink: ['/empleados']
                  },
                  {
                      label: 'Admins',
                      icon: 'pi pi-search',
                      routerLink: ['/admins']
                  }*/
              ]
          },
          {
            label: 'Inmuebles',
            items: [
                {
                    label: 'Nuevo',
                    icon: 'pi pi-plus',
                    routerLink: ['/formularioinmuebles/:id']
                },
                {
                    label: 'Todos',
                    icon: 'pi pi-search',
                    routerLink: ['/inmuebles']
                }
            ]
        },
        {
            label: 'Transacciones',
            items: [
                {
                    label: 'Buscar',
                    icon: 'pi pi-search',
                    routerLink: ['/transacciones']
                }
            ]
        },
          {
              label: 'Perfil',
              items: [
                  {
                      label: 'Salir',
                      icon: 'pi pi-sign-out'
                  }
              ]
          }
      ];
  }

}
