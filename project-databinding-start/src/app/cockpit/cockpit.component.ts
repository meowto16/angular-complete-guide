import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ServerElement } from '../server-element/server-element.model'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Pick<ServerElement, 'name' | 'content'>>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<Pick<ServerElement, 'name' | 'content'>>();

  constructor() { }

  ngOnInit(): void {
  }

  newServerContent = '';

  onAddServer(nameInput) {
    this.serverCreated.emit({
      name: nameInput.value,
      content: this.newServerContent
    })
  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({
      name: nameInput.value,
      content: this.newServerContent
    })
  }
}
