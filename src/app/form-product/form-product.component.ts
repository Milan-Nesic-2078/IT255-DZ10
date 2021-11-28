import { Component, OnInit } from '@angular/core';
import { Product } from './prduct.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  products: Product[] = [];

  randNumber: number;

  //backGroudnArr: string[] = ['assets/icons/yugo3.jpg'];

  str: string = 'assets/icons/yugo3.jpg';

  constructor(private router: Router) { }

  ngOnInit(): void {


    
  }


  addProduct(id: HTMLInputElement, model: HTMLInputElement, cena: HTMLInputElement){

    this.products.push(new Product(id.valueAsNumber, model.value, cena.valueAsNumber));

    this.randNumber = Math.floor(Math.random() * 5);

  }

  clickProduct(product){

    this.router.navigate(['/idProduct', product.id]);

  }

}
