import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login-auth',
  imports: [FormsModule,CommonModule],
  templateUrl: './login-auth.component.html',
  styleUrl: './login-auth.component.css'
})
export class LoginAuthComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => this.authService.handleLoginResponse(response),
      (error) => this.authService.handleLoginError(error)
    );
  }
}
