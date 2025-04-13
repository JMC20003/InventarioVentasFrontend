import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';

const routes: Routes = [
  { path:"",component:InicioComponent},
  { path:"inicio",component:InicioComponent},
  { path: 'producto/:', component: ProductoDetalleComponent },

];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
