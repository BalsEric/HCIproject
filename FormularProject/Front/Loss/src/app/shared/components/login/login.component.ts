import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../interfaces/user';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  @Input() user: User = { username: null, password: null};

  constructor(private router: Router,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.loginUser(this.user).subscribe({
      next: (response) => {
        if (response.token) {
          sessionStorage.setItem('userToken', response.token);
          this.router.navigate(['home']);
        }
      },
      error: err => {
        console.error('Error ' + err);
      }
    });
  }

  changeToRegister(): void {
    this.router.navigate(['register']);
  }

}


