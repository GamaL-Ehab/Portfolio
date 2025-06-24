import { Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { AboutComponent } from './components/main/about/about.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { ContactComponent } from './components/main/contact/contact.component';

export const routes: Routes = [
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent, title:'Home'},
    {path:'about', component:AboutComponent, title:'About'},
    {path:'projects', component:ProjectsComponent, title:'Projects'},
    {path:'contact', component:ContactComponent, title:'Contact'},
    {path:'**', redirectTo:'home'}
];
