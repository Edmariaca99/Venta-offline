import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas/ventas.component';
import { BusquedaComponent } from './busqueda/busqueda.component'; 
import { FormComponent } from './form/form.component';
import { FacturaComponent } from './factura/factura.component'; 




const routes: Routes = [
  { path: '', redirectTo:'/ventas', pathMatch: 'full' },
  { path:'ventas', component: VentasComponent},
  { path:'busqueda', component: BusquedaComponent},
  { path:'form', component: FormComponent},
  { path:'factura', component: FacturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
