import { exerciseCategory } from "../../enums/exerciseCategory.enum";
import { valueCounter } from "../../enums/valueCounter.enum";
import { Equipment } from "./equipment.interface";
import { TargetedMuscle } from "./targetedMuscle.interface";

export interface Exercise {
  id: number;
  name: string;
  description: string;
  image: string;
  duration: number;
  Category: exerciseCategory;
  valueCounter: valueCounter;
  weight: number;
  equipment: Equipment;
  targetedMuscles: TargetedMuscle[];
  createdAt: Date;
  updatedAt: Date;
}
