import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Course } from '../../model/course';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {
  courses: Course[] = [];

constructor(public srv:CourseService)
   {

   }
  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.srv.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  onDelete(pid: number){
    if(confirm('Are you sure to delete the course?'))
    {
      this.srv.deleteCourse(pid).subscribe({
        next: () => {
          alert('Course Deleted!!!');
          this.loadCourses();
        },
        error: (err) => {
          alert('Error!!!' + err);
        }
      });
    }
  }
}
