import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  // Is it a Good Practice? (public in Constructor)
  constructor(public authService: AuthService) {}
  logOut(): void {
    this.authService.logOut();
  }

  signIn(): void {
    this.authService.logIn();
  }
}
