# Создаем и выводим Shopping List

Как обычно, сначала заполняем массив мок-данными

```ts
  ingredients: Ingredient[]  = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
```

Затем выводим через `*ngFor`

```angular2html
<li class="list-group-item" *ngFor="let ingredient of ingredients">
  <a href="#" style="display: block; width: 100%; height: 100%; cursor: pointer;">{{ ingredient.name }} ({{ ingredient.amount }})</a>
</li>
```
