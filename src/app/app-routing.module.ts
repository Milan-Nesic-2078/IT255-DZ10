import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormIdComponent } from "./form-id/form-id.component";
import { FormProductComponent } from "./form-product/form-product.component";

const routes: Routes = [

    {path: '', component: FormProductComponent},

    {path: 'idProduct/:id', component: FormIdComponent}
   


];

@NgModule({

    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]


})

export class AppRoutingModule { 



}

