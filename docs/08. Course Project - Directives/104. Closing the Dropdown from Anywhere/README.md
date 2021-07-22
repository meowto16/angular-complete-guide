# Закрываем Dropdown отовсюду

А вот так можно переписать эту директиву, чтобы закрывать в любом месте
```ts
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  
  constructor(private elRef: ElementRef) {}
}
```

Т.е просто проверяем был ли клик снаружи
