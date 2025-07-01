import { Component } from '@angular/core';
import { Projects } from '../../../shared/interfaces/projects';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects:Projects[] = [
    {
      title:'Recipes', 
      thumbnail:'/images/Recipes.png', 
      description:'dynamic and responsive web application is built using HTML, CSS, and the Angular framework. It serves as a modern recipe discovery platform that fetches real-time food recipe data from an external API. Users can browse, and view a wide variety of recipes, complete with images, ingredients, and cooking instructions.', 
      repo:'https://github.com/GamaL-Ehab/Recipes', 
      liveDemo:'https://recipes-woad.vercel.app/', 
      date:'16/2/2025',
      techs: ['HTML', 'CSS', 'Tailwind', 'TS', 'Angular'],
      realProject: false
    },

    {
      title:'Ecommerce', 
      thumbnail:'/images/Ecommerce.png', 
      description:'This modern eCommerce web application is developed using HTML, CSS, and the Angular framework, designed to provide a fast, responsive, and engaging online shopping experience. It dynamically fetches product data from a remote API, allowing users to browse a wide selection of items in real-time.', 
      repo:'https://github.com/GamaL-Ehab/Ecommerce', 
      liveDemo:'https://ecommerce-kohl-rho-42.vercel.app/home', 
      date:'29/1/2025',
      techs: ['HTML', 'CSS', 'Tailwind', 'TS', 'Angular'],
      realProject: false
    },

    {
      title:'Tailwind', 
      thumbnail:'/images/Tailwind.png', 
      description:'This sleek and modern website is styled using Tailwind CSS, a utility-first CSS framework that enables fast, responsive, and highly customizable design. The site features built-in support for dark mode and light mode, allowing users to switch themes based on their preferences or system settings.', 
      repo:'https://github.com/GamaL-Ehab/tailwind-first', 
      liveDemo:'https://gamal-ehab.github.io/tailwind-first/', 
      date:'25/1/2025',
      techs: ['HTML', 'CSS', 'JS', 'Tailwind'],
      realProject: true
    },

    {
      title:'Weather', 
      thumbnail:'/images/Weather.png', 
      description:'This weather web application provides real-time weather updates using data fetched from a reliable weather API. Built with modern web technologies, the site displays the current weather conditions as well as the forecast for the next two days. Users can easily search for any city worldwide to view up-to-date weather information.', 
      repo:'https://github.com/GamaL-Ehab/Assignment11-Weather', 
      liveDemo:'https://gamal-ehab.github.io/Assignment11-Weather/', 
      date:'4/12/2024',
      techs: ['HTML', 'CSS', 'JS', 'Bootstrap'],
      realProject: false
    },

    {
      title:'Login System', 
      thumbnail:'/images/LoginSystem.png', 
      description:'This web application provides a secure and user-friendly interface for user registration and login. Designed with a focus on usability and security, the site allows new users to create an account and existing users to log in to access protected content or personalized features.', 
      repo:'https://github.com/GamaL-Ehab/Assignment10-Login-System', 
      liveDemo:'https://gamal-ehab.github.io/Assignment10-Login-System/', 
      date:'26/11/2024',
      techs: ['HTML', 'CSS', 'JS', 'Bootstrap'],
      realProject: true
    },

    {
      title:'Bookmarker', 
      thumbnail:'/images/Bookmarker.png', 
      description:'This web application allows users to bookmark and manage website URLs in a simple, organized, and user-friendly interface. Designed to help users keep track of their favorite or frequently visited websites, the app offers an efficient way to save, view, and manage bookmarks from any device.', 
      repo:'https://github.com/GamaL-Ehab/Assignment9-Bookmarker', 
      liveDemo:'https://gamal-ehab.github.io/Assignment9-Bookmarker/', 
      date:'22/11/2024',
      techs: ['HTML', 'CSS', 'JS', 'Bootstrap'],
      realProject: true
    },

    {
      title:'Quotes', 
      thumbnail:'/images/Quotes.png', 
      description:'This minimalist and interactive web application is designed to generate a random quote every time the user presses a button. It offers a fun and inspiring experience by displaying quotes from a diverse collection, encouraging reflection, motivation, or just a quick smile.', 
      repo:'https://github.com/GamaL-Ehab/Assignment8-Quote', 
      liveDemo:'https://gamal-ehab.github.io/Assignment8-Quote/', 
      date:'6/11/2024',
      techs: ['HTML', 'CSS', 'JS'],
      realProject: true
    },

    {
      title:'Daniels', 
      thumbnail:'/images/Daniels.png', 
      description:'This portfolio website template is a clean, modern, and responsive design built to help individuals showcase their skills, projects, and professional background. Ideal for developers, designers, freelancers, and creatives, the template provides a visually appealing and well-structured layout to make a strong first impression.', 
      repo:'https://github.com/GamaL-Ehab/Daniels', 
      liveDemo:'https://gamal-ehab.github.io/Daniels/', 
      date:'2/11/2024',
      techs: ['HTML', 'CSS', 'Bootstrap'],
      realProject: true
    },

    {
      title:'Devfolio', 
      thumbnail:'/images/Devfolio.png', 
      description:'This portfolio website template is a clean, modern, and responsive design built to help individuals showcase their skills, projects, and professional background. Ideal for developers, designers, freelancers, and creatives, the template provides a visually appealing and well-structured layout to make a strong first impression.', 
      repo:'https://github.com/GamaL-Ehab/Devfolio', 
      liveDemo:'https://gamal-ehab.github.io/Devfolio/', 
      date:'20/10/2024',
      techs: ['HTML', 'CSS', 'Bootstrap'],
      realProject: true
    },

    {
      title:'Mealify', 
      thumbnail:'/images/Mealify.png', 
      description:'This portfolio website template is a clean, modern, and responsive design built to help individuals showcase their skills, projects, and professional background. Ideal for developers, designers, freelancers, and creatives, the template provides a visually appealing and well-structured layout to make a strong first impression.', 
      repo:'https://github.com/GamaL-Ehab/Mealify', 
      liveDemo:'https://gamal-ehab.github.io/Mealify/', 
      date:'7/10/2024',
      techs: ['HTML', 'CSS'],
      realProject: true
    },

    {
      title:'Fokir', 
      thumbnail:'/images/Fokir.png', 
      description:'This portfolio website template is a clean, modern, and responsive design built to help individuals showcase their skills, projects, and professional background. Ideal for developers, designers, freelancers, and creatives, the template provides a visually appealing and well-structured layout to make a strong first impression.', 
      repo:'https://github.com/GamaL-Ehab/Fokir', 
      liveDemo:'https://gamal-ehab.github.io/Fokir/', 
      date:'25/9/2024',
      techs: ['HTML', 'CSS'],
      realProject: false
    },
  ]
}
