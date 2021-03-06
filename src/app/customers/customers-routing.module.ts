import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersFormComponent } from './customers-form/customers-form.component';

const routes: Routes = [
  { path: "clientes-form", component: CustomersFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
