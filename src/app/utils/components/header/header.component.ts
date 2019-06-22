import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signOut(): void {
    sessionStorage.clear();
    localStorage.clear();
    setTimeout(() => {
      this.router.navigate(['/login-page']);
 }, 1000);
  }

}
