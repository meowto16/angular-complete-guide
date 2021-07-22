# Используем Renderer для построения более лучшей директивы свойства

В прошлой лекции был показан не совсем правильны подход. Не следует напрямую менять DOM-элемент, лучше воспользоваться
`Renderer2`

> Также не следует забывать, что можно директивы создавать через cli: `ng g d better-highlight`

1. Создаем новую директиву через cli
```ts
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
  }
}
```
2. Через renderer можем ставить стиль, внутрь нужно прокинуть (элемент, свойство, значение, флаги)
3. Используем улучшенную директиву
```angular2html
<p appBetterHighlight>Only odd</p>
```
