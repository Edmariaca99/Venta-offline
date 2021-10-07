import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {ConnectionServiceModule} from 'ng-connection-service';  

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { VentasComponent } from './ventas/ventas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FacturaComponent } from './factura/factura.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    VentasComponent,
    BusquedaComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ConnectionServiceModule
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
