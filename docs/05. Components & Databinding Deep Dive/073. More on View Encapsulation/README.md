# Еще о View Encapsulation

В данной лекции просто объяснялось как их переключать.
Используется в декораторе `@Component`

Пример:

```ts
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
```
