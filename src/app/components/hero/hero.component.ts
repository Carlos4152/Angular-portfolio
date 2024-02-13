import { Component } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  ngOnInit(): void {
    AOS.init();
  }

}

