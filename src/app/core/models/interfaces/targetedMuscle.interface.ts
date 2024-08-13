import { Muscle } from "./muscle.interface";

export interface TargetedMuscle extends Muscle{
  pressurePercentage?: number;
}
