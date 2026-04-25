import { Injectable } from '@angular/core';
import { Course} from '../model/course';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseData: Course = new Course();
  readonly CourseApiUrl = 'https://localhost:7033/api/Courses';
  private refreshCoursesSubject = new BehaviorSubject<void>(undefined);

  courses$: Observable<Course[]> = this.refreshCoursesSubject.pipe(
    switchMap(() => this.getCourses())
  );

  constructor(private objHttp:HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.objHttp.get<Course[]>(this.CourseApiUrl);
  }

  addCourse(course: Course): Observable<Course> {
    return this.objHttp.post<Course>(this.CourseApiUrl, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.objHttp.delete<void>(`${this.CourseApiUrl}/${id}`);
  }

  refreshCourses(): void {
    this.refreshCoursesSubject.next();
  }
}
