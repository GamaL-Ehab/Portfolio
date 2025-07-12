import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  FrontendSkills:any[] = [
    {
      Src: './images/html.png',
      Name: 'HTML'
    },
    {
      Src: './images/CSS.png',
      Name: 'CSS'
    },
    {
      Src: './images/Javascript.png',
      Name: 'Javascript'
    },
    {
      Src: './images/typescript.png',
      Name: 'Typescript'
    },
    {
      Src: './images/Angular.png',
      Name: 'Angular'
    },
    {
      Src: './images/Bootstrap.png',
      Name: 'Bootstrap'
    },
    {
      Src: './images/Tailwind CSS.png',
      Name: 'Tailwind CSS'
    }
  ]

  BackendSkills:any[] = [
    {
      Src: './images/icons8-microsoft-sql-server-480.png',
      Name: 'SQL Server'
    },
    {
      Src: './images/CSharp.png',
      Name: 'C#'
    },
    {
      Src: './images/CPlusPlus.png',
      Name: 'C++'
    },
    {
      Src: './images/Python.png',
      Name: 'Python'
    },
  ]

  Tools:any[] = [
    {
      Src: './images/Visual Studio Code (VS Code).png',
      Name: 'VS Code'
    },
    {
      Src: './images/Visual Studio.png',
      Name: 'Visual Studio'
    },
    {
      Src: './images/Git.png',
      Name: 'GIT'
    },
    {
      Src: './images/github-mark-white.png',
      Name: 'Github'
    },
    {
      Src: './images/Vercel.png',
      Name: 'Vercel'
    }

  ]
}
