import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [MatCardModule],
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToCocktail(name: string) {
    this.router.navigate(['/cocktail', name]);
  }
}
