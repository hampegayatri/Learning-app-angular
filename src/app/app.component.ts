// src/app/app.component.ts
import { Component } from '@angular/core';

interface Course {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  fee: number;
  enrolled: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-app';
  courses: Course[] = [
    { id: 1, name: 'Introduction to Angular', description: 'Learn the basics of Angular framework.', startDate: new Date('2024-08-01'), fee: 1999.99, enrolled: false },
    { id: 2, name: 'Advanced Angular Techniques', description: 'Explore advanced features and techniques in Angular.', startDate: new Date('2024-09-01'), fee: 2999.99, enrolled: false },
    { id: 3, name: 'Angular Forms and Validation', description: 'Master form handling and validation in Angular applications.', startDate: new Date('2024-10-01'), fee: 2499.99, enrolled: false }
  ];

  constructor() {}

  // No additional logic needed in AppComponent for now
}
