# Создаем простую директиву аттрибута

1. Создадим новый файл `basic-highlight.directive.ts`. Данная директива будет просто красить фон в зеленый цвет
2. Вот так выглядит:
```ts
import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green'
  }
}
```
3. Далее нужно добавить директиву в модуль, массив `declarations`
```ts
@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
4. Используем директиву
```angular2html
<p appBasicHighlight>Only odd</p>
```
