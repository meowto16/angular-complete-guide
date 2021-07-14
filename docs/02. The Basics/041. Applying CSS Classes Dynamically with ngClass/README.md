# Добавляем CSS классы динамически, используя ngClass

Директива `ngClass` - позволяет нам динамически добавлять/убирать классы.

```angular2html
<div [ngClass]="{ online: serverStatus === 'active' }">
  Server with ID {{ serverId }} is {{ getServerStatus() }}
</div>
```

**Важно**: насколько я понял, аттрибуты `[ngClass]`, `[ngStyle]` не принимают в себя переносы строк, т.е так будет ошибка:

```angular2html
<div [ngClass]="{ 
  online: serverStatus === 'active',
  offline: serverStatus === 'offline', 
}">
  Server with ID {{ serverId }} is {{ getServerStatus() }}
</div>
```

Поэтому, как вариант, можно писать еще так. Получается вполне читаемо:
```angular2html
<div
    class="list-group-item"
    [class.list-group-item-danger]="serverStatus === 'offline'"
    [class.list-group-item-success]="serverStatus === 'active'"
    [class.list-group-item-info]="serverStatus === 'loading'"
    [style.color]="getColor()"
>
  Server with ID {{ serverId }} is {{ getServerStatus() }}
</div>
```
