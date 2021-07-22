# Создаем сервис логирования

Сервис - это обычный TS класс, его не нужно оборачивать в декораторы.

```ts
export class LoggingService {
  logStatusChange(status: string) {
    console.log(`A server status changed, new status: ${status}`)
  }
}
```

Пока мы сделали просто так, но так делать нельзя:
```angular2html
onCreateAccount(accountName: string, accountStatus: string) {
this.accountAdded.emit({
  name: accountName,
  status: accountStatus
});
const service = new LoggingService()
service.logStatusChange(accountStatus);
}
```

В Angular есть более удобные способы инициализирования сервисов. Через конструктор
