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
      description: " Newbie Job Finder is a website that helps people find entry-level jobs or assists them in transitioning to a new career. I created the logo and design for this project, and I decided to build a website and a sample dashboard to improve my backend skills and continue practicing my Angular skills.",
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
      description: `Job Hunter is a simple platform that helps users track their job application with its details,
      provides tips on preparing for interviews, and builds resumes and cover letters. This project was built to learn and practice Angular 16, and I used some backend technologies to
      understand the basics and gain some knowledge.`,
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
