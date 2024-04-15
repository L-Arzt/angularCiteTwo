import { Component } from '@angular/core';
import { BtnBlackWhiteComponent } from '../../components/ui/btn-black-white/btn-black-white.component';
import { HomeHeroComponent } from '../../components/home-hero/home-hero.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BtnBlackWhiteComponent, HomeHeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
