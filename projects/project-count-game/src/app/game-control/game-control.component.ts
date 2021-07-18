import { EventEmitter, Output } from '@angular/core'
import { Component, OnDestroy, OnInit } from '@angular/core'

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {
  isGameStarted: boolean = false;
  currentCounter: number = 0;
  interval = setInterval(() => {}, 1000);
  @Output() counterChanged = new EventEmitter<number>();
  @Output() counterCleared = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.isGameStarted = true;
    this.interval = setInterval(() => {
      this.currentCounter += 1;
      this.counterChanged.emit(this.currentCounter);
    }, 1000);
  }

  stopGame() {
    this.isGameStarted = false;
    clearInterval(this.interval);
  }

  clearGame() {
    this.currentCounter = 0;
    this.stopGame();
    this.counterCleared.emit();
  }

  ngOnDestroy() {
    this.stopGame();
  }
}
