import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Import Angular Material Modules.
import {
  MdButtonModule,
  MdCheckboxModule
} from '@angular/material';

//Import Covalent Modules.
import {
  CovalentLayoutModule,
  CovalentDataTableModule,
  CovalentPagingModule,
  CovalentSearchModule,
} from '@covalent/core';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

//Import a locally defined Component
import { GreenSquareComponent } from './green-square/green-square.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTableComponent } from './mytable/mytable.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    GreenSquareComponent,
    MyTableComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MdButtonModule,
    MdCheckboxModule,

    CovalentLayoutModule,
    // (optional) Additional Covalent Modules imports
    CovalentDynamicFormsModule,
    CovalentDataTableModule,
    CovalentPagingModule,
    CovalentSearchModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
