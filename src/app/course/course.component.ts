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
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courses: Course[] = [
    { id: 1, name: 'Introduction to Angular', description: 'Learn the basics of Angular framework.', startDate: new Date('2024-08-01'), fee: 1999.99, enrolled: false },
    { id: 2, name: 'Advanced Angular Techniques', description: 'Explore advanced features and techniques in Angular.', startDate: new Date('2024-09-01'), fee: 2999.99, enrolled: false },
    { id: 3, name: 'Angular Forms and Validation', description: 'Master form handling and validation in Angular applications.', startDate: new Date('2024-10-01'), fee: 2499.99, enrolled: false }
  ];

  userName: string = ''; // Property to store user's name

  constructor() {}

  // Method to reset user's name
  resetName() {
    this.userName = '';
  }

  enroll(course: Course) {
    course.enrolled = true;
  }

  drop(course: Course) {
    course.enrolled = false;
  }
}
