import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router, // router para usar o 'navigate'
    private route: ActivatedRoute // route paga pegarmos a rota ativa no mo mento
  ) {
    this.courses$ = this.coursesService.listAll().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos.');
        return of([]); // retornando um Observable de array vazio para que o spinner pare de ser renderizado
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  onAdd() {
    // o angular adicona o '/new' relativo à rota em que a página já se encontra naquele momento
    // sem precisar duplicar o 'courses/new' na nossa rota
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
