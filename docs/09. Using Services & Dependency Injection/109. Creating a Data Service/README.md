# Создаем Дата сервис

Другая задача сервисов — это сохранение и управление какими-либо данными

Создадим `AccountService`, и вынесем логику из `app.component.html`

```ts
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
```

Из `app.component.html` убрались события, теперь они находятся внутри компонентов
```diff
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-8 col-md-offset-2">
-     <app-new-account (accountAdded)="onAccountAdded($event)"></app-new-account>    
+     <app-new-account></app-new-account>
      <hr>
      <app-account
        *ngFor="let acc of accounts; let i = index"
        [account]="acc"
-       (statusChanged)="onStatusChanged($event)"></app-account>        
+       [id]="i"></app-account>
    </div>
  </div>
</div>
```

`new-account.component.ts`
```ts
import { Component } from '@angular/core';
import { LoggingService } from '../logging.service'
import { AccountService } from '../account.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    this.loggingService.logStatusChange(status);
  }
}
```

`account.component.ts`
```ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service'
import { AccountService } from '../account.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountService],
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
    this.loggingService.logStatusChange(status)
  }
}
```
