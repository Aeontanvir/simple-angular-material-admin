import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav'



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
  ]
})
export class DefaultModule { }
