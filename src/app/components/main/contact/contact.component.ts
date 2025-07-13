import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  platforms:any[] = [
    {
      Name:'LinkedIn',
      Icon:'fa-brands fa-linkedin',
      Link:'https://www.linkedin.com/in/gamal-ehab-2baa5332b'
    },
    {
      Name:'Whatsapp',
      Icon:'fa-brands fa-whatsapp',
      Link:'https://wa.me/+201118416050'
    },
    {
      Name:'Gmail',
      Icon:'fa-brands fa-google',
      Link:'https://mail.google.com/mail/?view=cm&fs=1&to=gamalehabg@gmail.com&su=NewMail'
    },
  ]
}
