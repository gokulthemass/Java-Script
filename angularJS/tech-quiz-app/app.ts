import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Body } from './body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Body],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech-quiz-app';


}
