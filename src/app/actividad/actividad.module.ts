import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadListComponent } from './actividad-list/actividad-list.component';
import { ActividadService } from './actividad.service';
import { ActividadDetailComponent } from './actividad-detail/actividad-detail.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GuiaModule } from '../guia/guia.module';
import { ActividadCreateComponent } from './actividad-create/actividad-create.component';
import { ActividadGuiasComponent } from './actividad-guias/actividad-guias.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        GuiaModule
    ],
    declarations: [ActividadListComponent,ActividadDetailComponent, ActividadCreateComponent, ActividadGuiasComponent],
    providers: [ActividadService],
    bootstrap: [ActividadListComponent]
})
export class ActividadModule { }

