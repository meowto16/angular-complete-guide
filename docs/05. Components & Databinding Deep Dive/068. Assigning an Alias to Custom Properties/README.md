# Задаем алиас для кастомных свойств

Можно делать так:

`server-element.component.ts`
```ts
@Input('srvElement') element: ServerElement
```

`app.component.html`
```angular2html
<app-server-element *ngFor="let serverElement of serverElements;" [srvElement]="serverElement"></app-server-element>
```

Т.е можно вместо `element`, в аргументы декоратора `@Input` передать алиас, который мы будем использовать, в нашем случае
это `srvElement`
