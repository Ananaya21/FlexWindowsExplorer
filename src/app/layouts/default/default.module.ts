import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { FolderComponent } from 'src/app/modules/folder/folder.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    FolderComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatListModule
  ]
})
export class DefaultModule { }
