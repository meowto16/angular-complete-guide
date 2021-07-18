import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = []
  evenNumbers: number[] = []

  onAddNumber(num: number): void {
    const numbers = num % 2 === 0 ? this.evenNumbers : this.oddNumbers
    numbers.push(num)
  }

  onClearNumbers(): void {
    this.oddNumbers.length = 0;
    this.evenNumbers.length = 0;
  }
}
