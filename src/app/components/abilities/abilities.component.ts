import { Component } from '@angular/core';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent {

  abilities = [
    { 
      id: 1,
      img: '../../../assets/responsive.png',
      title: 'Responsive Design',
      description: 'Build responsive websites and applications that work well on various devices and screen sizes.'
    },
    {
      id: 2,
      img: '../../../assets/api.png',
      title: 'API Integration',
      description: 'Working with backend developers to integrate frontend code with server-side APIs.'
    },
    {
      id: 3,
      img: '../../../assets/debugging.png',
      title: 'Debugging',
      description: 'Identify and troubleshoot issues by using developer tools and debugging tools.'
    },
    {
      id: 3,
      img: '../../../assets/teamwork.png',
      title: 'TeamWork',
      description: 'Able to work and communicate effectively with other developers to accomplish our goals.'
    }
  ];

}
