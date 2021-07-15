# Настраиваем приложение

1. Ставим приложение через `ng new project-app`
2. На все вопросы отвечаем через Enter (по дефолту)
3. Добавляем bootstrap@3 `npm install --save bootstrap@3`
4. Добавляем bootstrap в `angular.json`
```json
{
  "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
  ]
}
```
5. Проверяем работает ли bootstrap в `app.component.html`
```html
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h2>I'm working!</h2>
    </div>
  </div>
</div>
```
