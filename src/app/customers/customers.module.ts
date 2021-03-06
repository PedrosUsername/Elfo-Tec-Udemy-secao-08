import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomersFormComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule
  ],
  exports: [
    CustomersFormComponent
  ]
})
export class CustomersModule { }
