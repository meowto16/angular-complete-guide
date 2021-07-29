# Практика и различные обыденные штуки

Добавляем ссылки с реальными переменными:

`servers.component.html`
```angular2html
<a
    [routerLink]="['/servers', server.id]"
    [queryParams]="{ allowEdit: '1' }"
    fragment="loading"
    href="#"
    class="list-group-item"
    *ngFor="let server of servers">
    {{ server.name }}
</a>
```

`users.component.html`
```angular2html
<a
    [routerLink]="['/users', user.id, user.name]"
    href="#"
    class="list-group-item"
    *ngFor="let user of users">
    {{ user.name }}
</a>
```

И обрабатываем один из роутов как раньше:

`server.component.ts`
```ts
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.server = this.serversService.getServer(+id);
    })
  }
}
```
