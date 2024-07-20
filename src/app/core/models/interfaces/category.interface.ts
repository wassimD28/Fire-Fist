import { exerciseCategory } from "../../enums/exerciseCategory.enum";

export interface Category {
  id?: number;
  name: exerciseCategory;
  description: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}
