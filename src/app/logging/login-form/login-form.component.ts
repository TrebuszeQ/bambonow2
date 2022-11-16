import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

// services
import { LoggingService } from '../services/account.service';

//interfaces
import { LoginData } from '../logging-interfaces/login-data';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {

  loginForm = this.fb.group({
    username: new FormControl('', [Validators.minLength(4), Validators.maxLength(30), Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.maxLength(30), Validators.required]),
  });

  // username = this.loginForm.value.username!;
  // password = this.loginForm.value.password!;
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
  constructor(private fb: FormBuilder, private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  sendData(data: LoginData) {
    // const usernameInputElement = document.getElementById('username');
    // const passwordInputElement = document.getElementById('password');

    this.loggingService.sendData(data).subscribe( response => {
      console.log(response);
    })

    this.loginForm.reset();
    return;
  }
}