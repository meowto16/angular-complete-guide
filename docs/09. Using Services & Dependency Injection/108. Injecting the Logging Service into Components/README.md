# Инжектим Logging Service в компоненты

Вот правильный вариант внедрения сервисов в компоненты:

```ts
import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService] // 1. Нам необходимо указать данный класс в провайдерах
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService) {} // 2. Затем при помощи краткой записи инициализации - создаем инстанс класса

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus); // 3. Пользуемся классом
  }
}
```
