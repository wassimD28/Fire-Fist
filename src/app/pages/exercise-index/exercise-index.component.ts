import { Component } from '@angular/core';
import { SideFilterComponent } from '../../shared/components/side-filter/side-filter.component';

@Component({
  selector: 'app-exercise-index',
  standalone: true,
  imports: [SideFilterComponent],
  templateUrl: './exercise-index.component.html',
})
export class ExerciseIndexComponent {

}
