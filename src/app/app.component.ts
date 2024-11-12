import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HttpClientModule, ApolloModule, FormsModule, RouterOutlet, SidebarComponent],
  styleUrl: './app.component.css',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'propiedadesbi';
}
