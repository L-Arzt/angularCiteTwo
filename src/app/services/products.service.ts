import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getRecommend():Observable<Product[]>{
    return this.http.get<Product[]>('https://fakestoreapi.com/products?limit=5')
  }
}
