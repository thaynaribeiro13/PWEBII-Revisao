import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RevisarCompraComponent } from './components/produtos/revisar-compra/revisar-compra.component';
import { TodosOsBrinquedosComponent } from './components/produtos/todos-os-brinquedos/todos-os-brinquedos.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'produtos', component:TodosOsBrinquedosComponent},
  {path: 'produtos/revisar', component:RevisarCompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
