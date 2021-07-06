# Работа с шаблонами компонентов

Шаблон компонента должен всегда присутствовать.

`templateUrl` - задаем путь до шаблона компонента (html-файла)
`template` - объявляем шаблон прямо в .ts файле.

Вроде этого:

```typescript
@Component({
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```
