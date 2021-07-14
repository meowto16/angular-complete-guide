import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus: string = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  isDisplayDetails = false;
  servers = [
    'Testserver',
    'Testserver 2'
  ]
  displayDetailsLogs: string[] = []

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {

  }

  onCreateServer() {
    this.servers.push(this.serverName)
    this.serverCreationStatus = `Server was created! Server name is: ${this.serverName}`;
    this.serverCreated = true;
  }

  onDisplayDetails() {
    this.isDisplayDetails = !this.isDisplayDetails
    this.displayDetailsLogs.push(new Date().toISOString())
  }
}
