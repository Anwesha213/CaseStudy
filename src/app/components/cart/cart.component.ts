import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any =[];;
  allProducts:any =0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
  this.cart.getProductData().subscribe(res=>{
    this.products = res;
    this.allProducts = this.cart.getTotalAmount();
  })
  }
  removeProduct(item:any){
    this.cart.removeCartData(item);
  }
  removeAllProduct(){
    this.cart.removeAllCart();
  }
}
