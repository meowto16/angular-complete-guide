# Настраиваем дочерние роуты

Роуты можно вкладывать друг в друга:

```ts
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
  ] },
  { path: 'servers', component: ServersComponent, children: [
      { path: ':id', component: ServerComponent },
      { path: 'servers/:id/edit', component: EditServerComponent },
  ] },
]
```

Но так стоит делать, только когда у вас роуты должны содержать в себе другие мини-роуты. Т.е нужно в компоненте родительском
объявить еще раз `<router-outlet></router-outlet>`

`servers.component.html`
```diff
<div class="row">
  <div class="col-xs-12 col-sm-4">
    <div class="list-group">
      <a
        [routerLink]="['/servers', server.id]"
        [queryParams]="{ allowEdit: '1' }"
        fragment="loading"
        href="#"
        class="list-group-item"
        *ngFor="let server of servers">
        {{ server.name }}
      </a>
    </div>
  </div>
  <div class="col-xs-12 col-sm-4">
-   <app-edit-server></app-edit-server>
+   <router-outlet></router-outlet>
  </div>
</div>
```

`users.component.html`
```diff
<div class="row">
  <div class="col-xs-12 col-sm-4">
    <div class="list-group">
      <a
        [routerLink]="['/users', user.id, user.name]"
        href="#"
        class="list-group-item"
        *ngFor="let user of users">
        {{ user.name }}
      </a>
    </div>
  </div>
  <div class="col-xs-12 col-sm-4">
-   <app-user></app-user>
+   <router-outlet></router-outlet>
  </div>
</div>

```
