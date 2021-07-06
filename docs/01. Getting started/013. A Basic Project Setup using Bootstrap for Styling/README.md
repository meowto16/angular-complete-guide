# Базовая настройка проекта с использованием Bootstrap для стилизации

Ставим bootstrap `npm install --save bootstrap@3`

`angular.json` - файл настройки CLI

Нужно добавить bootstrap в секцию "styles"

```json
{
  "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
  ]
}
```
