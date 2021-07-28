# Достаем Query параметры и фрагменты

Как и в случае с path-параметрами, следует подписываться на изменения (в след. лекции).

В консоль логах пример, как можно достать из url'а параметры.
```diff
constructor(
    private serversService: ServersService,
+   private route: ActivatedRoute
) { }

ngOnInit() {
+   console.log(this.route.snapshot.queryParams);
+   console.log(this.route.snapshot.fragment);
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    
+   this.route.queryParams.subscribe();
+   this.route.fragment.subscribe();
}
```
