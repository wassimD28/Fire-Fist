import { Component } from '@angular/core';
import { Link } from '../../../core/models/interfaces/link.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  loggedIn: boolean = false;
  links : Link[] = [
    {name: 'Home', url: '/Home', isCurrent: false},
    {name: 'Exercises', url: '/exercises', isCurrent: true},
    {name: 'show', url: '/show', isCurrent: false},
    {name: 'Contact', url: '/Contact', isCurrent: false},
  ]
  onLinkClick(clickedLink :Link){
    this.links.forEach(link => link.isCurrent = false);
    clickedLink.isCurrent = true;
  }

}
