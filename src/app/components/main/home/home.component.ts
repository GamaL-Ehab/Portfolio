import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopProjectsComponent } from '../../additions/top-projects/top-projects.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TopProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
