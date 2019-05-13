import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
    {
    path: 'about',
    loadChildren: '../about/about.module#AboutPageModule'
  },
  {
  path: 'songs',
  loadChildren: '../songs/songs.module#SongsPageModule'
  },
  {
  path: 'map',
  loadChildren: '../map/map.module#MapPageModule'
  }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
