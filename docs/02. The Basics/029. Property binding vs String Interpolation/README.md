# Property binding против интерполяции строк

Можно так (Интерполяция строк):
```angular2html
<p>{{ allowNewServer }}</p>
```

А можно так (Property binding):
```angular2html
<p [innerText]="allowNewServer"></p>
```

Если нужно просто вывести текст — используем интерполяцию строк

Иначе - property binding

Самое главное - это не смешивать эти два подхода, т.е так работать не будет:
```angular2html
<p [innerText]="{{ !allowNewServer }}"></p>
```
