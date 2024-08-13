import { AuthService } from './../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { SideFilterComponent } from '../../shared/components/side-filter/side-filter.component';
import { Exercise } from '../../core/models/interfaces/exercise.interface';
import { ExerciseCategory } from '../../core/enums/exerciseCategory.enum';
import { ExerciseCardComponent } from '../../shared/components/exercise-card/exercise-card.component';
import { ExerciseDifficulty } from '../../core/enums/exerciseDifficulty.enum';
import { PrivacyComponent } from '../../shared/components/privacy/privacy.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateExerciseDialogComponent } from '../../shared/components/create-exercise-dialog/create-exercise-dialog.component';
import { CategoryService } from '../../core/services/category/category.service';
import { Category } from '../../core/models/interfaces/category.interface';

@Component({
  selector: 'app-exercise-index',
  standalone: true,
  imports: [SideFilterComponent, ExerciseCardComponent, PrivacyComponent, MatDialogModule, CreateExerciseDialogComponent],
  templateUrl: './exercise-index.component.html',
})
export class ExerciseIndexComponent implements OnInit {
  categories: Category[] = [];
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (Response) => {
        this.categories = Response;
      },
      error: (error) => {
        console.error('Error fetching categories', error);
      }
    })
  }
  // Injections
  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService,
    private authService: AuthService  // Inject the AuthService to access the user's access token
  ) { }

  openDialog() {
    this.dialog.open(CreateExerciseDialogComponent, {
      width: '600px',
      height: '550px',
      disableClose: true,  // Prevent closing the dialog by clicking outside
      data: {
        accessToken : this.authService.getAccessToken(),
      }
    })
  }

  exercises: Exercise[] = [
    {
      id: 1,
      name: 'Squats',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: ExerciseCategory.Strength,
      image: 'the-way-of-samurai-k5.jpg',
      difficulty: ExerciseDifficulty.Beginner,
      targetedMuscles: [
        { id: 0, name: 'Chest', image: 'chest.svg', pressurePercentage: 10 },
        { id: 1, name: 'Back', image: 'lower back.svg', pressurePercentage: 40 },
        { id: 2, name: 'Legs', image: 'upper leg.svg', pressurePercentage: 50 }
      ]
    },
  ];
}
