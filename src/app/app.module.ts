import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, RouterModule.forRoot([
    {path:'' , component: HomeComponent},
    {path:'about', component: AboutComponent},
  ]) ],
  declarations: [ AppComponent, HelloComponent, AboutComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
