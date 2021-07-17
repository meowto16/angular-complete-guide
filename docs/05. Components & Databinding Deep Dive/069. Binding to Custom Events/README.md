# Привязка к кастомным событиям

Для того чтобы создавать свои события, необходимо использовать `EventEmitter`.

1. В нашем компоненте создаем свой `event`
```ts
@Output() serverCreated = new EventEmitter<Pick<ServerElement, 'name' | 'content'>>();
```

2. Создаем функцию, которая будет выбрасывать данный `event`
```ts
onAddServer() {
this.serverCreated.emit({
  name: this.newServerName,
  content: this.newServerContent
})
}
```

3. Выбрасываем `event` в шаблоне:
```angular2html
<div class="row">
  <div class="col-xs-12">
    <p>Add new Servers or blueprints!</p>
    <label>Server Name</label>
    <input type="text" class="form-control" [(ngModel)]="newServerName">
    <label>Server Content</label>
    <input type="text" class="form-control" [(ngModel)]="newServerContent">
    <br>
    <button
        class="btn btn-primary"
        (click)="onAddServer()">Add Server</button>
    <button
        class="btn btn-primary"
        (click)="onAddBlueprint()">Add Server Blueprint</button>
  </div>
</div>
```

4. Слушаем `event` в родителе
```angular2html
<app-cockpit (serverCreated)="onServerAdded($event)" (blueprintCreated)="onBlueprintAdded($event)"></app-cockpit>
```

5. Обрабатываем `event` в родителе
```ts
onServerAdded(serverData: Pick<ServerElement, 'name' | 'content'>) {
this.serverElements.push(new ServerElement('server', serverData.name, serverData.content))
}
```

Таким образом, мы вынесли состояние компонента наверх, в родителя. А из дочернего слушаем только событие.
