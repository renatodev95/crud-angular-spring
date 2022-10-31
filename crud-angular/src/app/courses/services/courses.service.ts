import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  listAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      // delay(5000),
      // tap((courses) => console.log(courses))
    );
  }

  loadById(id: string): Observable<Course> {
    return this.httpClient.get<Course>(`${this.API}/${id}`).pipe(first());
  }

  // recebendo um objeto parcial de Curso
  save(record: Partial<Course>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }

  private update(record: Partial<Course>) {
    return this.httpClient.put<Course>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
