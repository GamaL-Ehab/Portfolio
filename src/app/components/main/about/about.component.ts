import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  Skills:any[] = [
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
}
