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
