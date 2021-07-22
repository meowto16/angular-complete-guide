# Создаем свою структурную директиву

```ts
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) { // Так как под капотом преобразуется в <ng-template> нужно чтобы совпадало с селектором
    if (!condition) this.vcRef.createEmbeddedView(this.templateRef)
    else  this.vcRef.clear()
  }

  constructor(
    private templateRef: TemplateRef<any>, // Доступ к <ng-template> рефу 
    private vcRef: ViewContainerRef
  ) { }
}
```
