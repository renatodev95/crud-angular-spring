import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Injectable({
  providedIn: 'root',
})
export class CourseResolver implements Resolve<Course> {

  constructor(private service: CoursesService) {}

  // Guarda de Rota
  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<Course> {
    // Esse resolver vai pegar informação dos parâmetros, então caso seja a rota de "edição"
    // vai obter o 'id' do parâmetro e vai chamar o serviço pra carregar a informação do curso existente, através da API no Spring
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    // Quando for a rota de "criação" também vai passar por esse resolver, mas aí não haverá o parâmetro 'id',
    // portanto será retornado um objeto de Course com os dados vazios.
    return of({_id: '', name: '', category: ''});
  }
}
