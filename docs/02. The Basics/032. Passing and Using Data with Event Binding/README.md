# Пробрасываем и используем данные с Event Binding

В функции можно пробросить `$event`, который передает информацию о событии:
```angular2html
<input type="text" class="form-control" (input)="onUpdateServerName($event)">
```

Затем можно данное событие обработать:
```typescript
onUpdateServerName(event: Event): void {
this.serverName = (event.target as HTMLInputElement).value
}
```
