import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SongsPage } from './songs.page';

import { PipesModule } from '../../pipes/pipes.module'

const routes: Routes = [
  {
    path: '',
    component: SongsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [SongsPage]
})
export class SongsPageModule {}
