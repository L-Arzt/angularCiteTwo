import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-recomend',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './recomend.component.html',
  styleUrl: './recomend.component.scss'
})
export class RecomendComponent {

  constructor(private productsService: ProductsService) {
    
  }

  recommendsPhotos$ = this.productsService.getRecommend()

}
