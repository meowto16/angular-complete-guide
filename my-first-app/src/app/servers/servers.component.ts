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
  userName = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {

  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Server name is: ${this.serverName}`;
    this.serverCreated = true;
  }

  onSubmitUser(): void {
    this.userName = '';
  }
}
