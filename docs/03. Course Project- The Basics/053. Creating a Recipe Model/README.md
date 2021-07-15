# Создаем модель Recipe

Модель — это простой TS класс. Так как Angular использует ООП стиль программирования - мы мыслим в рамках объектов.

Так, например, в списке рецептов у нас будут некоторые рецепты. 
Модель нужна для того, чтобы описать план каждого рецепта, наметить его свойства.

```ts
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
```
