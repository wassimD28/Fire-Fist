import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Exercise } from '../../../core/models/interfaces/exercise.interface';
import { Muscle } from '../../../core/models/interfaces/muscle.interface';
import { FormsModule } from '@angular/forms';
import { TargetedMuscle } from '../../../core/models/interfaces/targetedMuscle.interface';
import { BodyDiagramComponent } from '../body-diagram/body-diagram.component';
import { simpleFrontViewGroups } from '../../../core/data/simpleFrontViewGroups.data';
import { simpleFrontViewMuscles } from '../../../core/data/simpleFrontViewMuscles.data';

@Component({
  selector: 'app-targeted-muscle-step',
  standalone: true,
  imports: [FormsModule, BodyDiagramComponent,],
  templateUrl: './targeted-muscle-step.component.html',
  styleUrl: './targeted-muscle-step.component.css'
})
export class TargetedMuscleStepComponent {
  @Input() exercise!: Exercise;
  @Input() muscles!: Muscle[];

  // muscles data
  simpleFrontViewGroups = simpleFrontViewGroups;
  simpleFrontViewMuscles = simpleFrontViewMuscles;

  targetedMuscles: TargetedMuscle[] = [
    { id: 0, name: 'chest', pressurePercentage: 0 },
    { id: 1, name: 'shoulder', pressurePercentage: 0 }
  ];

  advancedView = false;
  isChoosingMuscle = false;

  @Output() data = new EventEmitter();

  toggleAdvancedView(): void {
    this.advancedView = !this.advancedView;
  }


  removeTargetedMuscle(index: number): void {
    this.targetedMuscles.splice(index, 1);
  }

  chooseMuscle(): void {
    this.isChoosingMuscle = true
  }
}
