# Стилизуем активные ссылки

Объясняли как пользоваться `routerLinkActive` и `[routerLinkActiveOptions]`. В целом в прошлых лекциях сам догадался.

```angular2html
<li role="presentation" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
  <a routerLink="/">Home</a>
</li>
<li role="presentation" routerLinkActive="active">
  <a routerLink="/servers">Servers</a>
</li>
<li role="presentation" routerLinkActive="active">
  <a [routerLink]="['/users']" >Users</a>
</li>
```
