import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { FolderComponent } from './modules/folder/folder.component';
const routes: Routes = [{
  path : '',
  component: DefaultComponent,
  children : [{
    path: '',
    component : HomeComponent ,
  },
  {
    path: 'folder/:id',
    component : FolderComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
