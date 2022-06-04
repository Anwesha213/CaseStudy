import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItemNumber:number =0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProductData().subscribe(res=>{
      this.totalItemNumber = res.length;
    })
  }
}
