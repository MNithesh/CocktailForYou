import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  imports: [CommonModule],
})
export class IngredientComponent implements OnInit {
  drink: any;
  ingredients: string[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const drinkId = this.route.snapshot.paramMap.get('id');
    console.log('Loading ingredient details for ID:', drinkId);

    if (drinkId) {
      this.http
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
        )
        .subscribe((response: any) => {
          this.drink = response.drinks[0];
          this.ingredients = this.getIngredients(this.drink);
        });
    }
  }

  getIngredients(drink: any): string[] {
    return Array.from(
      { length: 15 },
      (_, i) => drink[`strIngredient${i + 1}`]
    ).filter((ing) => ing);
  }
}
