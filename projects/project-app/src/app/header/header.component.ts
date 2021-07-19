import { Component, EventEmitter, Input, Output } from '@angular/core'

export type THeaderSection = 'recipes' | 'shopping-list'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed: boolean = true;
  @Input() activeSection: THeaderSection = 'recipes';
  @Output() onRouteChange = new EventEmitter<THeaderSection>()

  onChangeRoute(event: Event, section: THeaderSection) {
    event.preventDefault();
    this.onRouteChange.emit(section);
  }

  get isActiveRecipesSection() { return  this.activeSection === 'recipes' }
  get isActiveShoppingListSection() { return  this.activeSection === 'shopping-list' }
}
