import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../interfaces/user';
import {LoginService} from '../../services/login.service';
import {RegisterService} from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  @Input() user: User = { username: null, email: null, password: null};

  constructor(private router: Router,
              private registerService: RegisterService) {
  }

  ngOnInit(): void {
  }
  register(): void {
    this.registerService.registerUser(this.user).subscribe({
      next: (response) => {
        if (response.token) {
          sessionStorage.setItem('userToken', response.token);
          this.router.navigate(['home']);
        }
      },
      error: err => {
        console.error('Error' + err);
      }
    });
  }

  changeToLogin(): void {
    this.router.navigate(['login']);
  }
}
