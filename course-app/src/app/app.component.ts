import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Course } from './model/course';
import { AddComponent } from "./courses/add/add.component";
import { DisplayComponent } from "./courses/display/display.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddComponent, DisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'course-app';
}
