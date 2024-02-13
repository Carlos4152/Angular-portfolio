import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = [
    { id: 1, img: "../../../assets/skills-icon/html.png", title: "HTML" },
    { id: 2, img: "../../../assets/skills-icon/css.png", title: "CSS" },
    { id: 3, img: "../../../assets/skills-icon/bootstrap.png", title: "Bootstrap" },
    { id: 4, img: "../../../assets/skills-icon/tailwind.png", title: "Tailwind" },
    { id: 5, img: "../../../assets/skills-icon/figma.png", title: "Figma" },
    { id: 6, img: "../../../assets/skills-icon/js.png", title: "JavaScript" },
    { id: 7, img: "../../../assets/skills-icon/angular.png", title: "Angular" },
    { id: 11, img: "../../../assets/skills-icon/git.png", title: "Git" },
    { id: 12, img: "../../../assets/skills-icon/github.png", title: "GitHub" },
    { id: 13, img: "../../../assets/skills-icon/nodejs.png", title: "Node JS" },
    { id: 14, img: "../../../assets/skills-icon/express.png", title: "Express JS" },
    { id: 15, img: "../../../assets/skills-icon/mongo.png", title: "Mongo DB" },

  ]

}
