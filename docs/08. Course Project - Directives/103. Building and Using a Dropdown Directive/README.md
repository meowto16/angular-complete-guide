# Создаем и используем Dropdown директиву

Пишем вот такую простенькую директиву, которая переключает класс при клике
```ts
import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isDropdown: boolean = false;

  @HostListener('click') onToggleDropdown() {
    this.isDropdown = !this.isDropdown;
  }
}
```

Используется:
```angular2html
<div class="btn-group" appDropdown>

</div>
```
