# Используем сервисы для коммуникации компонентов

С помощью сервисов и `EventEmitter` компоненты могут взаимодействовать друг с другом без поднятия состояния наверх.

Добавляем в `account.service.ts`
```ts
statusUpdated = new EventEmitter<string>();
```

В одном компоненте выбрасываем событие:
```diff
  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
+   this.accountsService.statusUpdated.emit(status);
  }
```

В другом его ловим и реагируем:
```diff
constructor(private loggingService: LoggingService, private accountsService: AccountService) {
+   this.accountsService.statusUpdated.subscribe((status: string) => alert('New Status: ' + status))
}
```
