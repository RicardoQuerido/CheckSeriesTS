import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  private submitted = false;
  private loading = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthenticationService) {
    this.signUpForm = this.formBuilder.group({
      username: new FormControl('' ),
      password: new FormControl('' ),
    });
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    console.log('chamei');

    if (this.signUpForm.invalid) {
      console.log('fdss');
      return;
    }

    this.loading = true;
    this.authService.signUp(this.signUpForm.controls.username.value, this.signUpForm.controls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
          this.loading = false;

        }
      );

  }

}
