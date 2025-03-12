import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  imports: [CommonModule],
})
export class CocktailComponent implements OnInit {
  cocktailName: string | null = '';
  drinks: any[] = [];
  filteredDrinks: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.cocktailName = params.get('name');
      console.log('CocktailComponent loaded with name:', this.cocktailName);

      if (this.cocktailName) {
        this.fetchCocktailData();
      }
    });
  }

  fetchCocktailData() {
    this.http
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.cocktailName}`
      )
      .subscribe((response: any) => {
        this.drinks = response.drinks || [];
        this.filteredDrinks = this.drinks;
      });
  }

  filterDrinks(event: Event) {
    const filter = (event.target as HTMLSelectElement).value;
    this.filteredDrinks =
      filter === 'All'
        ? this.drinks
        : this.drinks.filter((drink) => drink.strAlcoholic === filter);
  }

  viewIngredients(id: string) {
    this.router.navigate(['/ingredient', id]);
  }
}
