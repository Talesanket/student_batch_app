import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.students = this.dataService.getStudents();
  }

  viewStudent(id: number): void {
    this.router.navigate(['/student', id]);
  }
}
