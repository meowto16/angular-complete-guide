# Получаем доступ к ng-content с @ContentChild

`app.component.html`
```angular2html
<app-server-element *ngFor="let serverElement of serverElements;" [srvElement]="serverElement" [name]="serverElement.name">
  <p #contentParagraph>
    <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
    <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
  </p>
</app-server-element>
```

`server-element.component.ts`
```ts
@ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;
```

Таким образом можно получить доступ к рефу children'а (контента).

Как и в случае с `@ViewChild()` при `ngOnInit` - будет пустым, заполнится при `ngAfterViewInit`

