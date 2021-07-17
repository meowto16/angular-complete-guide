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

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({
      name: this.newServerName,
      content: this.newServerContent
    })
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      name: this.newServerName,
      content: this.newServerContent
    })
  }
}
