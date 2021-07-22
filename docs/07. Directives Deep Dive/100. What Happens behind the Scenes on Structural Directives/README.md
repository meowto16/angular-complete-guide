# Что происходит под капотом структурных директив

Зачем нужна `*` у структурных директив? Она говорит что это структурная директива. Под капотом, ангуляр их трансформирует в что угодно

Под капотом она просто преобразует такой код:
```angular2html
<div *ngIf="!onlyOdd">
  <li
      *ngFor="let even of evenNumbers;"
      [ngClass]="{odd: even % 2 !== 0}"
      [ngStyle]="{backgroundColor: even % 2 !== 0 ? 'yellow' : 'transparent'}"
      class="list-group-item">
    {{ even }}
  </li>
</div>
```

В такой:
```angular2html
<ng-template [ngIf]="!onlyOdd">
  <div>
    <li
        *ngFor="let even of evenNumbers;"
        [ngClass]="{odd: even % 2 !== 0}"
        [ngStyle]="{backgroundColor: even % 2 !== 0 ? 'yellow' : 'transparent'}"
        class="list-group-item">
      {{ even }}
    </li>
  </div>
</ng-template>
```
