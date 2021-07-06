# Работа со стилями компонента

Объявлять стили можно двумя путями:

- **styleUrls**. Принимает массив путей к стилям
- **styles**. Принимает массив строк со стилями.

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {}
```
