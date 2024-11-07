import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HttpClientModule, ApolloModule, FormsModule],
  styleUrl: './app.component.css',
  template: `
    <main>
      <header class="brand-name">
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'propiedadesbi';
}
