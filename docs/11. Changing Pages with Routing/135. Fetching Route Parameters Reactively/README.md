# Забирает параметры роута реактивно

Появилась проблема, что если на текущем роуте переходить на этот же роут, но с другими параметрами, то данные не обновляются.
```diff
<p>User with ID {{ user.id }} loaded.</p>
<p>User name is {{ user.name }}</p>
<hr>
+ <a [routerLink]="['/users', 10, 'Anna']">Load Anna (10)</a>
```

Дело в том, что мы задаем значения только на OnInit. Это можно исправить, подписавшись на изменения `this.route.params`,
так как он является `Observable` (доберемся до них позже)

```diff
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params.name,
    }

+   this.route.params
+     .subscribe(
+       (params: Params) => {
+         this.user.id = params.id;
+         this.user.name = params.name;
+       }
+     );
  }
}
```
