# Создаем модель Ingredient

Мы создали директорию `shared` куда будем размещать общие виджеты/модели и т.д

Можно сокращать запись, и писать только аргументы в конструкторе, чтобы не повторяться:
```ts
export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
```

Вместо:
```ts
export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}
```
