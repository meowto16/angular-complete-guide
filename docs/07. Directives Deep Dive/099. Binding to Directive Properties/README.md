# Привязываемся к свойствам директивам

Если для директивы добавить `@Input` свойства, то элементу с директивой можно будет задавать их

```ts
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
}
```

И на элементе:
```angular2html
<p appBetterHighlight [defaultColor]="'black'" [highlightColor]="'skyblue'">Only odd</p>
```

Еще можно сделать так:
```ts
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input('appBetterHighlight') highlightColor: string = 'blue';
}
```

Тогда можно задавать значение прямо директиве:
```angular2html
<p [appBetterHighlight]="'skyblue'">Only odd</p>
```
