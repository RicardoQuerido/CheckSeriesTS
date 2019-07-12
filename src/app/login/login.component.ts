import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {first} from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthenticationService) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('' ),
      password: new FormControl('' ),
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
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
