# Используем Query параметры - практика

Роутим программно:

`server.component.ts`
```ts
onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route })
}
```

И считываем query-параметры:

`edit-server.component.ts`
```ts
this.route.queryParams.subscribe(
  (queryParams: Params) => {
    this.allowEdit = queryParams.allowEdit === '1';
  }
);
```
