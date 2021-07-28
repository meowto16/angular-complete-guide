# Пробрасываем Query параметры и фрагменты

Задаются через `[queryParams]` и `fragment` в элементе с директивой `[routerLink]`
```angular2html
<a
  [routerLink]="['/servers', 5, 'edit']"
  [queryParams]="{ allowEdit: '1' }"
  fragment="loading"
  href="#"
>
  {{ server.name }}
</a>
```

А вот так задаются в компоненте через метод `this.router.navigate`
```ts
onLoadServer(id: number) {
  this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' })
}
```
