# Как приложение Angular загружается и стартует

Рассмотрим `app.component.ts` файл. Там имеется декоратор `@Component`, внутри которого есть ключ `selector`. 

Это имя нашего тэга, расположенного в `index.html` файле. Он заменяет данный **кастомный** тег своим темплейтом из `app.component.html`

Также если мы посмотрим на `source` нашей страницы, мы увидим, что в конце у нас подключаются JS скрипты. Они инжектятся
CLI автоматически.

![1. Injected scripts by CLI](./images/1.%20Injected%20scripts%20by%20CLI.png)

Когда `ng serve` пересобирает наш проект, он собирает **js-бандлы** и автоматически внедряет правильные импорты в `index.html` файл,

Рассмотрим файл `main.ts`. Здесь происходит первичная инициализация нашего приложения, с помощью строки

```typescript
platformBrowserDynamic().bootstrapModule(AppModule)
```

Данная строка стартует наша приложение, пробрасывая внутрь `AppModule`

![2. Application Bootstrap](./images/2.%20Application%20Bootstrap.png)

Далее рассмотрим `app.module.ts` файл.

Здесь также есть некий класс, обернутый декоратором `@NgModule`.
  - bootstrap. Перечисляет все компоненты, о которых должен знать Angular в то время, когда он анализирует index.html файл

![3. Bootstrap array](./images/3.%20Bootstrap%20array.png)

Далее Angular проверяет `app.component.ts` файл, находит там селектор и затем заменяет его в `index.html` темплейтом `app.component.html`
