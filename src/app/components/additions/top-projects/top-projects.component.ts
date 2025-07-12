import { Component } from '@angular/core';
import { Projects } from '../../../shared/interfaces/projects';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-projects',
  imports: [RouterLink],
  templateUrl: './top-projects.component.html',
  styleUrl: './top-projects.component.css'
})
export class TopProjectsComponent {
  TopProjects:Projects[] = [
    {
      title:'Ecommerce', 
      thumbnail:'/images/Ecommerce.png', 
      description:'This modern eCommerce web application is developed using HTML, CSS, and the Angular framework, designed to provide a fast, responsive, and engaging online shopping experience. It dynamically fetches product data from a remote API, allowing users to browse a wide selection of items in real-time.', 
      repo:'https://github.com/GamaL-Ehab/Ecommerce', 
      liveDemo:'https://ecommerce-kohl-rho-42.vercel.app/home', 
      date:'29/1/2025',
      techs: [
        {
          Src: './images/html.png',
          Name: 'HTML'
        },
        {
          Src: './images/CSS.png',
          Name: 'CSS'
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
          Src: './images/Tailwind CSS.png',
          Name: 'Tailwind CSS'
        }
      ],
      realProject: false
    },

    {
      title: 'Recipes',
      thumbnail: '/images/Recipes.png',
      description: 'Dynamic and responsive web application is built using HTML, CSS, and the Angular framework. It serves as a modern recipe discovery platform that fetches real-time food recipe data from an external API. Users can browse, and view a wide variety of recipes, complete with images, ingredients, and cooking instructions.',
      repo: 'https://github.com/GamaL-Ehab/Recipes',
      liveDemo: 'https://recipes-woad.vercel.app/',
      date: '16/2/2025',
      techs: [
        {
          Src: './images/html.png',
          Name: 'HTML'
        },
        {
          Src: './images/CSS.png',
          Name: 'CSS'
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
          Src: './images/Tailwind CSS.png',
          Name: 'Tailwind CSS'
        }
      ],
      realProject: false
    },

    {
      title:'Weather', 
      thumbnail:'/images/Weather.png', 
      description:'This weather web application provides real-time weather updates using data fetched from a reliable weather API. Built with modern web technologies, the site displays the current weather conditions as well as the forecast for the next two days. Users can easily search for any city worldwide to view up-to-date weather information.', 
      repo:'https://github.com/GamaL-Ehab/Assignment11-Weather', 
      liveDemo:'https://gamal-ehab.github.io/Assignment11-Weather/', 
      date:'4/12/2024',
      techs: [
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
          Src: './images/Bootstrap.png',
          Name: 'Bootstrap'
        }
      ],
      realProject: false
    },

    {
      title:'Bookmarker', 
      thumbnail:'/images/Bookmarker.png', 
      description:'This web application allows users to bookmark and manage website URLs in a simple, organized, and user-friendly interface. Designed to help users keep track of their favorite or frequently visited websites, the app offers an efficient way to save, view, and manage bookmarks from any device.', 
      repo:'https://github.com/GamaL-Ehab/Assignment9-Bookmarker', 
      liveDemo:'https://gamal-ehab.github.io/Assignment9-Bookmarker/', 
      date:'22/11/2024',
      techs: [
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
          Src: './images/Bootstrap.png',
          Name: 'Bootstrap'
        }
      ],
      realProject: false
    },

    {
      title:'Devfolio', 
      thumbnail:'/images/Devfolio.png', 
      description:'This portfolio website template is a clean, modern, and responsive design built to help individuals showcase their skills, projects, and professional background. Ideal for developers, designers, freelancers, and creatives, the template provides a visually appealing and well-structured layout to make a strong first impression.', 
      repo:'https://github.com/GamaL-Ehab/Devfolio', 
      liveDemo:'https://gamal-ehab.github.io/Devfolio/', 
      date:'20/10/2024',
            techs: [
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
        }
      ],
      realProject: false
    },
  ]
}
