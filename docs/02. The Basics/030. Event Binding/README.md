# Event binding

Event binding происходит при помощи такого синтаксиса:
```angular2html
<button
class="btn btn-primary"
[disabled]="!allowNewServer"
(click)="onCreateServer()"
>
Add server
</button>
```

Т.е `(event)="function()"`
