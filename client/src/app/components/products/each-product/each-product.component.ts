import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { CartService } from '../../../services/cart.service';
const ENDPOINT = 'product';

@Component({
  selector: 'app-each-product',
  templateUrl: './each-product.component.html',
  styleUrls: ['./each-product.component.css']
})
export class EachProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }
  
  add() {
    this.cartService.add(this.product);
  }

}
