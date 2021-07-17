# Получаем доступ к шаблону и DOM при помощи @ViewChild

Для того чтобы получить доступ к рефу из компонента, можно использовать `@ViewChild()` декоратор. В аргументы передаем
имя рефа.

Пример использования:

```ts
@ViewChild('serverContentInput') serverContentInput: ElementRef;

onAddServer(nameInput) {
  this.serverCreated.emit({
    name: nameInput.value,
    content: this.serverContentInput.nativeElement.value
  })
}
```
