import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Import Angular Material Modules.
import {
  MdButtonModule,
  MdCheckboxModule
} from '@angular/material';

//Import Covalent Modules.
import { CovalentLayoutModule, CovalentStepsModule, CovalentDataTableModule } from '@covalent/core';
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

//Import a locally defined Component
import { GreenSquareComponent } from './green-square/green-square.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTableComponent } from './mytable/mytable.component';


@NgModule({
  declarations: [
    AppComponent,
    GreenSquareComponent,
    MyTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MdButtonModule,
    MdCheckboxModule,

    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentDataTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
