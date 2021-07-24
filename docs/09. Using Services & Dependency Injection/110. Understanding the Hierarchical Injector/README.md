# Разбираемся с иерархичным инжектором

Когда мы объявляем сервис в `providers` то он прокидывается вниз по дереву.

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService], // Мы объявили наш сервис. Теперь инстанс сервиса будет доступен для всех компонентов
})
export class AppComponent implements OnInit {
  // ...
}
```

Как работает `providers` в разных местах:

- `AppModule` - Одинаковый инстанс сервиса будет доступен во **всем приложении**
- `AppComponent` - Одинаковый инстанс сервиса будет доступен для **всех компонентов** (но не для **других сервисов**)
- `Любой другой компонент` - Один и тот же инстанс сервиса будет доступен **в компоненте и во всех дочерних компонентах**

Таким образом, ошибка в прошлом коде была из-за того, что мы в дочерних компонентах тоже прокидывали `providers`.
Соответственно мы перезатирали инстанс класса, который приходит нам из `app.component.ts`

Как пример в `new-account.component.ts`:

```diff
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
- providers: [AccountsService, LoggingService]
+ providers: [LoggingService]
})
```
