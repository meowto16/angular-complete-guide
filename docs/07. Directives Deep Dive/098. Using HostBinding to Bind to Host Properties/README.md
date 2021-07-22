# Используем HostBinding чтобы привязываться к свойствам элемента

Также в Angular есть декоратор `@HostBinding` который позволяет связываться со свойством. Ну и затем менять его
как обычное свойство класса

Объявляем, привязываемся к `backgroundColor`
```ts
@HostBinding('style.backgroundColor') backgroundColor: string = 'red';
```

И меняем как обычное свойство
```ts
this.backgroundColor = 'yellow'
```
