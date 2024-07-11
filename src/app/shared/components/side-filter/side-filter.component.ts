import { Component } from '@angular/core';
import { Category } from '../../../core/models/interfaces/category.interface';
import { exerciseCategory } from '../../../core/enums/exerciseCategory.enum';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { DifficultyFilterComponent } from './components/difficulty-filter/difficulty-filter.component';
import { TargetedMusclesFilterComponent } from './components/targeted-muscles-filter/targeted-muscles-filter.component';

@Component({
  selector: 'side-filter',
  standalone: true,
  imports: [CategoryFilterComponent,DifficultyFilterComponent,TargetedMusclesFilterComponent],
  templateUrl: './side-filter.component.html',
})
export class SideFilterComponent {
  categories: Category[] = [
    { name: exerciseCategory.Cardio, description: 'Cardio is exercise that is designed to benefit the heart and blood vessels, for example running, swimming, and cycling. We go to the gym three times a week and do cardio and weights.', image: 'cardio.png' },
    { name: exerciseCategory.Strength, description: 'Strength training is a type of exercise that causes your muscles to contract against an outside resistance. The outside resistance can be from your body weight, weight machines, medicine balls, resistance bands or dumbbells.', image: 'strength.png' },
    { name: exerciseCategory.Flexibility, description: 'Flexibility exercises stretch your muscles and can help your body move and bend easier. These exercises may not improve your endurance or strength, but being flexible gives you more freedom of movement for other exercise as well as for everyday activities.', image: 'flexibility.png' }
  ];
}
