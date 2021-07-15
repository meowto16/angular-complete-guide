# Отображаем детальный рецепт

Просто пока сверстали шаблон для `recipe-detail`:

```angular2html
<div class="row">
  <div class="col-xs-12">
    <img src="https://www.mariaushakova.com/wp-content/uploads/2020/07/Okroshka-740-735x735.jpg" alt="Okroshka" class="img-responsive img-circle" style="max-height: 200px;">
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <h1>Recipe Name</h1>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <div class="btn-group">
      <button type="button" class="btn btn-primary dropdown-toggle">
        Manage Recipe <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        <li><a href="#">To Shopping List</a></li>
        <li><a href="#">Edit Recipe</a></li>
        <li><a href="#">Delete Recipe</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    Description
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    Ingredients
  </div>
</div>
```
