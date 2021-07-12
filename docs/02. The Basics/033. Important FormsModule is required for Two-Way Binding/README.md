# Важно. FormsModule необходим для Two-Way Binding

Важно: для Two-Way Binding (рассматривается в следующем уроке), вам необходимо включить `ngModel` директиву.
Для этого необходимо добавить `FormsModule` в `imports[]` массив в AppModule.

Также необходимо импортировать данный модуль из `@angular/forms` в app.module.ts файле.

```typescript
import { FormsModule } from '@angular/forms';
```
