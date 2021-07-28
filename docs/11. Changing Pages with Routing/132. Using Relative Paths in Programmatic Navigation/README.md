# Используем относительные пути в программном перенаправлении

Различие директивы `routerLink` и использования `this.router` заключается в том, что:

- `routerLink` - всегда знает на какой странице мы находимся, и строит относительный путь исходя из этого
- `this.router` - не знает где мы находимся, строит относительный путь от `/` основной страницы. Можно задавать вручную относительный путь

Пример:
```ts
constructor(
  private router: Router,
  private route: ActivatedRoute,
) {}

async onLoadServers() {
  // complex calculation

  await this.router.navigate(['servers'], { relativeTo: this.route });
}
```

Как видно из примера, путь лучше не хардкодить, а просто забрать его из `ActivatedRoute`.
