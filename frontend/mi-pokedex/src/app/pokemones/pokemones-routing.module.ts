import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonesPage } from './pokemones.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonesPage
  },
  {
    path: 'pokemones-view',
    loadChildren: () => import('./pokemones-view/pokemones-view.module').then( m => m.PokemonesViewPageModule)
  },
  {
    path: 'pokemones-create',
    loadChildren: () => import('./pokemones-create/pokemones-create.module').then( m => m.PokemonesCreatePageModule)
  },
  {
    path: 'pokemones-edit',
    loadChildren: () => import('./pokemones-edit/pokemones-edit.module').then( m => m.PokemonesEditPageModule)
  },
  {
    path: 'pokemones-delete',
    loadChildren: () => import('./pokemones-delete/pokemones-delete.module').then( m => m.PokemonesDeletePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonesPageRoutingModule {}
