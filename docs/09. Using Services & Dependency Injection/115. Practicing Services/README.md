# Сервисы. Практика

К заданию приложен код. Находится в директории `services-assignments-start`.

Нужно отрефакторить код на сервисы.

## Решение

Создал такой сервис:

```ts
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
```

Использование в `active-users.component.html`
```angular2html
<h3>Active Users</h3>
<ul class="list-group">
  <li
    class="list-group-item"
    *ngFor="let user of usersService.activeUsers; let i = index">
    {{ user }} | <a href="#" (click)="usersService.onSetToInactive(i)">Set to Inactive</a>
  </li>
</ul>
```

И использование в `inactive-users.component.html`
```angular2html
<h3>Inactive Users</h3>
<ul class="list-group">
  <li
    class="list-group-item"
    *ngFor="let user of usersService.inactiveUsers; let i = index">
    {{ user }} | <a href="#" (click)="usersService.onSetToActive(i)">Set to Active</a>
  </li>
</ul>
```

## Решение Преподавателя. Резюме

1. Лучше не использовать методы/свойства сервиса напрямую в шаблоне
2. Забыл добавить `counter.service.ts`
3. Забыл убрать binding'и в шаблоне `app.component.html`, так как поторопился
