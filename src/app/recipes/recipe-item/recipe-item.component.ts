import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe!: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }
  onSelect(){
    // to trigger recipe selected and call emit()
    this.recipeSelected.emit();

  }

}
