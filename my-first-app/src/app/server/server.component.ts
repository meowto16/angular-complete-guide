import { Component } from '@angular/core';

export type TServerStatus = 'offline' | 'active' | 'loading'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = ServerComponent.randomizeServerId();
  serverStatus: TServerStatus = ServerComponent.randomizeServerStatus()

  private static randomizeServerId(): number {
    return +(Math.random() * 10).toFixed()
  }

  private static randomizeServerStatus(): TServerStatus {
    const allowedStatuses: TServerStatus[] = ['offline', 'active', 'loading']
    const randomIndex = +(Math.random() * (allowedStatuses.length - 1)).toFixed()

    return allowedStatuses[randomIndex]
  }

  public getServerStatus() {
    return this.serverStatus.toUpperCase();
  }
}
