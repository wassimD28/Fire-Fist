import { Component } from '@angular/core';
import { Link } from '../../../core/models/interfaces/link.interface';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  loggedIn: boolean = false;
  links : Link[] = [
    {name: 'Home', url: '/Home'},
    {name: 'Exercises', url: '/Exercises'},
    {name: 'About', url: '/About'},
    {name: 'Contact', url: '/Contact'},
  ]
}
