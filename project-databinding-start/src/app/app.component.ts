import { Component } from '@angular/core';
import { ServerElement } from './server-element/server-element.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: ServerElement[] = [
    new ServerElement('server', 'Test server', 'Just a test server!'),
    new ServerElement('blueprint', 'Test blueprint', 'Just a test blueprint!'),
  ];

  onServerAdded(serverData: Pick<ServerElement, 'name' | 'content'>) {
    this.serverElements.push(new ServerElement('server', serverData.name, serverData.content))
  }

  onBlueprintAdded(blueprintData: Pick<ServerElement, 'name' | 'content'>) {
    this.serverElements.push(new ServerElement('blueprint', blueprintData.name, blueprintData.content))
  }
}
