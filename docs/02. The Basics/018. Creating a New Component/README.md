# Создаем новый компонент

> Необходимо называть директории также, как и компонент 

> Каждый компонент должен иметь собственную директорию

> Классы компонентов тоже следует именовать вида YourName**Component**

Компонент — это всего лишь класс, что позволяет Angular'у создавать объекты базируясь на blueprint'е, который вы ему скажете.

Необходимо добавлять декоратор `@Component` который скажет Angular'у, что это не обычный класс, а компонент.
```typescript
@Component()
export class ServerComponent {}
```

Далее нужно добавить селектор. **ВАЖНО**, селектор должен быть уникальным и не должен перебивать стандартные HTML элементы.
Обычно именуют вроде: (class: `ServerComponent`, selector: `app-server`, file name: `server.component.ts`)

```typescript
@Component({
  selector: 'app-server'
})
export class ServerComponent {}
```

Затем нужно добавить шаблон компонента. Создаем файл `server.component.html` и добавляем путь к нему в декоратор
```typescript
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {}
```

Теперь, чтобы использовать данный компонент, нужно подробнее рассмотреть `app.module.ts` и понять за что он отвечает.
В следующей лекции

