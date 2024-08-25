import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


import { TaskDetailsComponent } from './dashboard/task-details/task-details.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { CreateProductCardComponent } from './product-dashboard/create-product-card/create-product-card.component';
import { createSupplierCardComponent } from './dashboard/create-supplier-card/create-supplier-card.component';
import { supplierDashboardComponent } from './dashboard/supplierDashboard.component';

const routes: Routes = [
  { path: 'supplier', component: supplierDashboardComponent },
  { path: 'products', component: ProductDashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    supplierDashboardComponent,
    createSupplierCardComponent,
    TaskDetailsComponent,
    ProductDashboardComponent,
    CreateProductCardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
