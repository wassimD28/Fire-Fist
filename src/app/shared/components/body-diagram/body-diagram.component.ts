import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body-diagram',
  standalone: true,
  imports: [],
  templateUrl: './body-diagram.component.html',
  styleUrl: './body-diagram.component.css'
})
export class BodyDiagramComponent {
  @Input() isChoosingMuscle! : boolean;
  
  frontSide = true;
  toggleSide(): void {
    this.frontSide = !this.frontSide;
  }
}
