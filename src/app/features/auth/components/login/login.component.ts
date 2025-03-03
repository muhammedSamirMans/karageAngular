import { Component } from '@angular/core';
import  {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../../core/service/auth.service';
import { filter, switchMap, tap } from 'rxjs';
import { GenericService } from '../../../../shared/services/generic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule,InputTextModule,ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private genericService:GenericService,private authService:AuthService,private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.genericService.postData('Auth/login', this.loginForm.value).pipe(
        tap((res: any) => {
          this.authService.setToken(res?.data?.token);
          this.genericService.isQBConnected.next(res?.data?.isQBConnected);
        }), // Store token
        switchMap((res: any) => {
          if (res?.data?.isQBConnected) {
            this.router.navigate(['/Home']); //  Navigate when true
            return []; //  Stop further execution
          } else {
            return this.genericService.getData('QuickBooks/connect-quickbooks'); //  Call second API when false
          }
        })
      ).subscribe((res: any) => {
        if (res?.url) {
          window.location.href = res.url; //  Redirect if API returns a URL
        }
      });    
    } else {
      console.log('Form is invalid');
    }
  }
}
