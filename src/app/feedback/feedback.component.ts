// feedback.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
    private subscription: Subscription | undefined;
  
    constructor(private http: HttpClient) {}
  
    ngOnInit(): void {
      console.log('FeedbackComponent initialized.');
    }
  
    ngOnDestroy(): void {
      console.log('FeedbackComponent destroyed.');
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }

  submitFeedback(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      alert('Feedback submitted successfully!');
      form.reset();
    } else {
      Object.values(form.controls).forEach((control: any) => {
        control.markAsTouched();
      });
    }
  }
}
