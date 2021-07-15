# Альтернативная нераскрывающаяся панель навигации

Для этого нужно заменить класс `collapse navbar-collapse` на `navbar-default`

Если мы хотим сделать его адаптивным, то меняем это:
```html
<div class="navbar-header">
  <a routerLink="/" class="navbar-brand">Recipe Book</a>
</div>
<div class="collapse navbar-collapse">
```

На это:
```html
<div class="navbar-header">
  <button type="button" class="navbar-toggle" (click)="collapsed = !collapsed">
	<span class="icon-bar" *ngFor="let iconBar of [1, 2, 3]"></span>
  </button>
  <a routerLink="/" class="navbar-brand">Recipe Book</a>
</div>
<div class="navbar-collapse" [class.collapse]="collapsed" (window:resize)="collapsed = true">
```

и добавляем это в `header.component.ts`
```ts
collapsed = true;
```
