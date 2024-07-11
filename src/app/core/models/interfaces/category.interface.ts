import { exerciseCategory } from "../../enums/exerciseCategory.enum";

export interface Category {
  name: exerciseCategory;
  description: string;
  image: string;
}
