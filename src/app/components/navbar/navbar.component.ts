import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  toggleValue = false


  toggleMenu(){
    if(this.toggleValue){
      this.toggleValue = false;
    } 
    else {
      this.toggleValue = true
    }
  }
}
