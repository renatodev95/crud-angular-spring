import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, tap, delay } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

private readonly  API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  listAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      // delay(5000),
      tap(courses => console.log(courses))
    );
  }
}