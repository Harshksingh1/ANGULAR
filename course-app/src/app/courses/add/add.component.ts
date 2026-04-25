import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Course } from '../../model/course';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  courseData: Course = new Course();

  constructor(private srv: CourseService) {}

  resetForm(form?: NgForm): void {
    if (form) {
      form.resetForm();
    }
    this.courseData = new Course();
  }

  ngOnInit(): void {
    this.resetForm();
  }

  createCourse(form: NgForm): void {
    this.srv.addCourse(this.courseData).subscribe({
      next: (data) => {
        console.log(data);
        this.resetForm(form);
        alert('Course creation success!!!');
        this.srv.refreshCourses();
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Error !!!' + err);
      }
    });
  }

  onSubmit(form: NgForm): void {
    if (this.courseData.Id === 0) {
      this.createCourse(form);
    }
  }
}
