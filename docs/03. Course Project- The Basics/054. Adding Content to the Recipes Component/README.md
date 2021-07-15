# Добавляем контент к компонентам Recipes

Пока просто временно создали карточку

```html
<div class="row">
  <div class="col-xs-12">
    <button class="btn btn-success">New Recipe</button>
  </div>
</div>
<div class="row">
  <div class="col-xs-12">
    <a href="#" class="list-group-item clearfix">
      <div class="pull-left">
        <h4 class="list-group-item-heading">Bitch Lasagna</h4>
        <p class="list-group-item-text">Made by PewDiePie</p>
      </div>
      <span class="pull-right">
        <img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/ru/e/e1/Bitch_Lasagna.jpg" alt="Bitch Lasagna" style="max-height: 50px;">
      </span>
    </a>
    <app-recipe-item></app-recipe-item>
  </div>
</div>
```
