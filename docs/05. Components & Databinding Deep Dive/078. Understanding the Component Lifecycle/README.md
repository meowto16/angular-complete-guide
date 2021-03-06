# Разбираемся с жизненными циклами компонентов

Когда создается новый компонент Angular, он проходит через некии стадии жизненных циклов. Это позволяет нам привязаться
к данным циклам и исполнить какую-либо свою логику.

- `ngOnChanges` - Вызывается, когда привязанное input-свойство меняется. Т.е декорированное с `@Input()`
- `ngOnInit` - Вызывается, когда компонент был инициализирован. Еще не добавлен в DOM, еще не отображен, но Angular завершил
базовую инициализацию. Запускается после `constructor`
- `ngDoCheck` - запускается каждый раз при запуске "отслеживания изменения". "Change detection" по англ., короче говоря
  когда нужно проверить — надо ли поменять что-то в шаблоне компонента.
- `ngAfterContentInit` - вызывается когда компонент внутри `ng-content` был инициализирован.
- `ngAfterContentChecked` - вызывается когда "change detection" проверил данный компонент внутри `ng-content`
- `ngAfterViewInit` - вызывается когда view компонента (и его дочерние view) были инициализированы.
- `ngAfterViewChecked` - вызывается каждый раз, когда view (и его дочерние view) были проверены.
- `ngOnDestroy` - вызывается перед уничтожением компонента.
