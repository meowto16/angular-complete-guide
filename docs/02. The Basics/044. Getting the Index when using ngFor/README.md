# Получаем индекс когда используем ngFor

Для того чтобы получить индекс, достаточно просто его назначить в переменную:
```angular2html
<div *ngFor = "let logItem of log; let i = index">
  {{ i }}
</div>
```
