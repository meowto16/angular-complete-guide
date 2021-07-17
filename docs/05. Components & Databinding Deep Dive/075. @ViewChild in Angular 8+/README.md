# Декоратор @ViewChild в Angular 8+

В Angular 8+, `@ViewChild()` синтакс был немного поменян.

Вместо:
```ts
@ViewChild('serverContentInput') serverContentInput: ElementRef;
```

Используем:
```ts
@ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;
```

Тоже самое изменение (добавление `{ static: true }` как второго аргумента) касается всех использований `ViewChild()` и
также `ContentChild()`. Если мы планируем использовать выбранный элемент внутри `ngOnInit()`

Если мы не планируем использовать внутри `ngOnInit`, но в любых других местах в компоненте, ставим `static: false`.

Если используем Angular 9+, нужно ставить только `{ static: true }` (если нужно), но не `{ static: false }`
