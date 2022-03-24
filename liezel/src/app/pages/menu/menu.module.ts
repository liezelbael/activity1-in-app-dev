import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('../main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'ionic',
    loadChildren: () => import('../ionic/ionic.module').then( m => m.IonicPageModule)
  },
  {
    path: 'flutter',
    loadChildren: () => import('../flutter/flutter.module').then( m => m.FlutterPageModule)
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
