# Редиректы и Wildcard роуты

Редиректить можно так:

`app.module.ts`
```ts
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'something', redirectTo: 'not-found' },
```

Ловить через wildcard можно так:

`app.module.ts`
```ts
  { path: '**', component: PageNotFoundComponent },
```

---

> Обработка урлов идет сверху-вниз, соответственно все роуты с wildcard'ами - должны идти снизу. 
