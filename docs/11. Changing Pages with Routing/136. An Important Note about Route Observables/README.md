# Важная вещь по поводу Route Observables

В прошлой лекции мы подписывались на изменения `this.route.params`, это работает и здесь не нужно ничего менять. Дело в том,
что Angular автоматически чистит подписку которую мы установили на ngOnDestroy.

Если бы этого не было - это приводило бы к утечке памяти, так как компонент бы уничтожался, а подписка оставалась бы в памяти.

В теории, следует добавлять OnDestroy метод и там чистить подписку.

```ts
import { OnDestroy, OnInit } from '@angular/core'
import { Subscription } from "rxjs/Subscription";

export class Component implements OnInit, OnDestroy {
  paramsSubscription: Subscription
  
  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(() => { /* ... */ })
  }
  
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
```
