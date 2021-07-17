import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { ServerElement } from '../server-element/server-element.model'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Pick<ServerElement, 'name' | 'content'>>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<Pick<ServerElement, 'name' | 'content'>>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput) {
    this.serverCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    })
  }
}
