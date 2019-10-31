import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FieldComponent } from './components/field/field.component';
import { CellComponent } from './components/cell/cell.component';
import { SettingsComponent } from './components/settings/settings.component';

import { FieldService } from 'src/app/services/field.service';
import { ShipsService } from 'src/app/services/ships.service';
import { ToolsService } from 'src/app/services/tools.service';
import { HttpService } from 'src/app/services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    CellComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FieldService,
    ShipsService,
    ToolsService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
