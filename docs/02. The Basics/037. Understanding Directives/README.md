# Изучаем директивы

Директивы - это инструкции для DOM. Когда мы добавляем компонент - мы используем директивы

Существуют директивы с шаблоном и без шаблона. 

Пример директивы:
```angular2html
<p appTurnGreen>Receives a green background!</p>
```

А примерно так выглядит ее объявление:
```typescript
@Directive({
  selector: '[appTurnGreen]'
})
export class TurnGreenDirective {
  
}
```
