import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FolderModule } from './modules/folder/folder.module';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatListModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule,
    FolderModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule

  ],
  providers: [SidebarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
