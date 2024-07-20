import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../models/interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:3000/api/category';

  constructor(private http : HttpClient) { }

  getAllCategories()  {
    return this.http.get<Category[]>(this.apiUrl)
  }
}
