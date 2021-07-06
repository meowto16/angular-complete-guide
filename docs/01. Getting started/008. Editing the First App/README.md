# Редактируем первое приложение

Компоненты в Angular - это что-то вроде кастомных HTML тегов со своим функционалом.

Удалим все, что есть внутри `app.component.html` и добавим туда:

```html
<input type="text" [(ngModel)]="name">
<p>{{ name }}</p>
```

Angular выдаст ошибку, так как мы не импортировали модуль, поэтому добавим его:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Добавляем наш FormsModule, которого не хватало
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
