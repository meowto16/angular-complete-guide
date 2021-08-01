# Конфигурируем обработку Query параметров

При программном роутинге, по дефолту GET-параметры сбрасываются. Чтобы их сохранить, можно указать `queryParamsHandling: preserve`

```diff
onEdit() {
  this.router.navigate(['edit'], { 
    relativeTo: this.route, 
+   queryParamsHandling: 'preserve' 
  })
}
```
