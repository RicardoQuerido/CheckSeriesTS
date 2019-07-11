import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {User} from '../User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User;

  constructor(private router: Router,
              private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(u => this.currentUser = u);
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
