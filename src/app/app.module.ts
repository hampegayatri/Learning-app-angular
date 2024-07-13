import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './highlight.directive';
import { UppercasePipe } from './uppercase.pipe';
import { AppRoutingModule } from './app-routing.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppInterceptor } from './http.interceptor'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    HighlightDirective,
    AppComponent,
    CourseComponent,
    UserComponent,
    UppercasePipe,
    FeedbackComponent,
    CourseFormComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
