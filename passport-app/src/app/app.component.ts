import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayComponent } from "./passports/display/display.component";
import { DisplayComponent as ProductDisplayComponent } from "./products/display/display.component";
import { RegisterComponent } from "./passports/register/register.component";
import { Observable } from 'rxjs';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayComponent, RegisterComponent, ProductDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'passport-app';
}

