# Пробрасываем контент в компонент используя ng-content

Существует директива `<ng-content></ng-content>`. При помощи нее можно указывать плейсхолдер, куда можно рендерить контент
компонента. 

Это как слоты во `Vue.js`

Пример:

`server-element.component.html`
```angular2html
<div class="panel panel-default">
  <div class="panel-heading">{{ element.name }}</div>
  <div class="panel-body">
    <p>
      <ng-content></ng-content>
    </p>
  </div>
</div>
```

`app.component.html`
```angular2html
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <app-server-element *ngFor="let serverElement of serverElements;" [srvElement]="serverElement">
        <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
        <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
      </app-server-element>
    </div>
  </div>
</div>
```
