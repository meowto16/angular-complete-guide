# Инжектим одни сервисы в другие

Для того чтобы использовать другие сервисы внутри сервиса необходимо:

1. Добавить `Injectable()`
2. Добавить сервис в конструктор
3. Использовать

```diff
import { LoggingService } from './logging.service'
import { Injectable } from '@angular/core'
+ @Injectable()
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

+ constructor(private loggingService: LoggingService) {
+ }

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
+   this.loggingService.logStatusChange(status);
  }
}
```
  
