import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: string[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('assets/json/product.json')
      .subscribe(data => {
        this.products = data['products'];
      });
  }

}
