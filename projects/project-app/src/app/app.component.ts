import { Component } from '@angular/core';
import { THeaderSection } from './header/header.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeSection: THeaderSection = 'recipes'

  handleRouteChange(section: THeaderSection): void {
    this.activeSection = section;
  }

  get isActiveSectionRecipes() { return this.activeSection === 'recipes' }
  get isActiveSectionShoppingList() { return this.activeSection === 'shopping-list' }
}
