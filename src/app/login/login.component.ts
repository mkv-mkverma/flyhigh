import { Router } from '@angular/router';
import { LoginService } from './../utils/services/login.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(public loginService: LoginService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }
  onLoggedin() {
    sessionStorage.setItem('isLoggedin', 'true');
  }

  onSubmit() {
    console.log('value', this.profileForm.value);
    this.loginService.login(this.profileForm.value).subscribe(data => {
      console.log(data);
      if (data) {
        this.onLoggedin();
        // tslint:disable-next-line:no-string-literal
        localStorage.setItem('token', JSON.stringify(data['token']));
      }
      setTimeout(() => {
        this.redirectLandingPage();
      }, 500);
    },
    (error) => {
      // Error
      alert(error.error.error);
      console.log(error);
    });
  }
  redirectLandingPage() {
    this.router.navigate(['/location']);
  }

}
