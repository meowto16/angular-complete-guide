# Задаем алиас кастомным событиям

Также как и в декораторе `@Input()`, алиас можно задавать и в декораторе `@Output()`.

Пример:
`@Output('bpCreated')`

И в шаблоне:
```angular2html
<app-cockpit (serverCreated)="onServerAdded($event)" (bpCreated)="onBlueprintAdded($event)"></app-cockpit>
```
