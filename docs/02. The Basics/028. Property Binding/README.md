# Property binding

Можно привязывать пропсы таким синтаксисом:
```angular2html
<button class="btn btn-primary" [disabled]="!allowNewServer">Add server</button>
```

`allowNewServer` - это переменная, которая находится у нас в нашем компоненте:
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true; // Через 2 секунды - разрешаем добавлять сервера.
    }, 2000)
  }

  ngOnInit(): void {
  }
}
```
