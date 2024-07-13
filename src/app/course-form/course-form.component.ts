import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { noNumbersValidator, futureDateValidator } from './validators'; // Import your custom validators

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.courseForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        noNumbersValidator // Apply custom validator
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200)
      ]],
      startDate: ['', [
        Validators.required,
        futureDateValidator // Apply custom validator
      ]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.courseForm.valid) {
      // Implement your submission logic here, e.g., save to backend
      console.log(this.courseForm.value);
      alert('Course added successfully!');
      this.router.navigate(['/courses']); // Navigate back to courses page after submission
    } else {
      // Mark all fields as touched to trigger validation messages
      this.courseForm.markAllAsTouched();
    }
  }
}
