# Полностью понимаем Component Selector

Можно обернуть selector в квадратные скобки, чтобы использовать селектор по аттрибуту
```typescript
@Component({
  selector: '[app-server]',
  templateUrl: './server.component.html',
})
```

Тогда будет селектить по аттрибуту:
```html
<div app-server></div>
```

Также можно селекторить по CSS классу
```typescript
@Component({
  selector: '.app-servers',
  templateUrl: './server.component.html',
})
```

Тогда будет селектить по классу:
```html
<div class="app-servers"></div>
```

**Примечание**. Селект по ID не будет работать, не поддерживается Angular, также псевдоселекторы.

> Обычно всегда пользуются обычными селекторами по тегам, но стоит помнить, что есть альтернативы при надобности.

