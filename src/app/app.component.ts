import { Component } from '@angular/core';
import { AuthService } from './Services/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }

  homepage(){
    console.log("cos")
  }
}
