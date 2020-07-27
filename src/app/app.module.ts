import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ServicesModule } from './services/services.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';



import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/Calendar';
import { ConfirmDialogModule } from 'primeng/ConfirmDialog';
import { DropdownModule } from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    CandidateDetailComponent,

  ],
  imports: [
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    ServicesModule,
    FormsModule,
    HttpClientModule,

    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
