# Выводим список рецептов с ngFor

Выводим список рецептов при помощи ngFor:

```angular2html
<div class="row">
  <div class="col-xs-12">
    <a href="#" class="list-group-item clearfix" *ngFor="let recipe of recipes;">
      <div class="pull-left">
        <h4 class="list-group-item-heading">{{ recipe.name }}</h4>
        <p class="list-group-item-text">{{ recipe.description }}</p>
      </div>
      <span class="pull-right">
        <img class="img-responsive" [src]="recipe.imagePath" [alt]="recipe.name" style="max-height: 50px;">
      </span>
    </a>
    <app-recipe-item></app-recipe-item>
  </div>
</div>
```

Можно делать так (бинд аттрибутов):
```angular2html
<img class="img-responsive" [src]="recipe.imagePath" [alt]="recipe.name" style="max-height: 50px;">
```

А можно так (интерполяция строк):
```angular2html
<img class="img-responsive" src="{{ recipe.imagePath }}" alt="{{ recipe.name }}" style="max-height: 50px;">
```
