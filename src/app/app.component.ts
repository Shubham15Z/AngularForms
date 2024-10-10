import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
  @ViewChild('registrationForm') form: NgForm | undefined

  firstName: string = '';
  lastName: string = '';
  emailAddress: string = '';

  genders = [
    {id: 'check-male', value: 'male', display: 'Male'},
    {id: 'check-female', value: 'female', display: 'Female'},
    {id: 'check-other', value: 'other', display: 'Prefer not to say'},
  ]

  onFormSubmitted() {
    console.log(this.form);
    console.log(this.form?.value.firstname);
    console.log(this.form?.controls['firstname'].value);
    console.log(this.form?.value.lastname);

  }
}
