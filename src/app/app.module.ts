import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormProductComponent } from './form-product/form-product.component';
import { FormIdComponent } from './form-id/form-id.component';

@NgModule({
  declarations: [
    AppComponent,
    FormProductComponent,
    FormIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
