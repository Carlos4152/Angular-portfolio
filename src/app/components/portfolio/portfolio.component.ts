import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {


  projects = [
    {
      id: 1,
      img: "../../../assets/projects/newbie.png",
      title: "NEWBIE JOB FINDER",
      description: "Company aiding entry-level candidates or those exploring career shifts. Users register and utilize the platform's dashboard to view recent entry-level positions. This feature enables job applications, profile creation, image uploads, direct messaging to tech support, application removal, job title searches, and offers diverse candidate services.",
      skills: [
        "./../../assets/skills-icon/html.png", 
        "./../../assets/skills-icon/css.png", 
        "./../../assets/skills-icon/bootstrap.png", 
        "./../../assets/skills-icon/js.png", 
        "./../../assets/skills-icon/angular.png", 
        "./../../assets/skills-icon/nodejs.png", 
        "./../../assets/skills-icon/express.png", 
        "./../../assets/skills-icon/mongo.png"
      ],
      liveView: "https://newbiejobfinder.netlify.app/home",
      githubLink: "https://github.com/Carlos4152/mean_stack_newbie-job-finder",
      video: 'https://www.youtube.com/watch?v=t73nSkPAeNY&t=149s&ab_channel=Charly_Dev',
      demo: [{
        title:'DEMO ACCOUNT',
        email: 'carlos@gmail.com', 
        password: 'Colombia2023'
      }]
    },
    {
      id: 2,
      img: "./../../assets/projects/jobhunterone.png",
      title: "JOB HUNTER",
      description: ` It's a platform that allows users to keep track of their job applications. Users can register and sign in, and start adding, updating, and deleting their job applications. It also provides some free resources to be used as guidance on how to build a resume, cover letter, and how to get ready for interviews.
      `,
      skills: [
        "./../../assets/skills-icon/html.png", 
        "./../../assets/skills-icon/css.png", 
        "./../../assets/skills-icon/bootstrap.png", 
        "./../../assets/skills-icon/js.png", 
        "./../../assets/skills-icon/angular.png", 
        "./../../assets/skills-icon/nodejs.png", 
        "./../../assets/skills-icon/express.png", 
        "./../../assets/skills-icon/mongo.png"
      ],
      liveView: "https://jbhunter.netlify.app/login",
      githubLink: "https://github.com/Carlos4152/mean-stack-jobhunter",
      video: 'https://www.youtube.com/watch?v=8VDJ5U_fuRo&ab_channel=Charly_Dev',
      demo: [{
        title:'DEMO ACCOUNT',
        email: 'toyo@gmail.com', 
        password: 'Colombia2023'
      }]
    },
   
    
  ]


}
