# Стилизуем элементы динамически с помощью ngStyle

Ранее мы рассмотрели структурные директивы. Также существует директивы аттрибутов.

Они так называются, потому что они просто меняют лишь элемент, на котором они размещены. Они не меняют структуру элементов.

Пример использования `ngStyle`:

server.component.html
```angular2html
<div
  [ngStyle]="{
    color: getColor()
  }"
>
</div>
```

server.component.ts
```typescript
public getColor() {
switch (this.serverStatus) {
  case 'offline': return 'darksalmon'
  case 'active': return 'darkseagreen'
  case 'loading': return 'dodgerblue'
  default: return 'black'
}
}
```

т.е мы просто передаем некоторый объект с правилами. Если нужна более сложная логика - выносим в метод.
