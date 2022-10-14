import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  
  @Input() courses: Course[] = [];
  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onAdd() {
    // o angular adicona o '/new' relativo à rota em que a página já se encontra naquele momento
    // sem precisar duplicar o 'courses/new' na nossa rota
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
