# Используем жизненные циклы на практике

> Хорошая практика - имплементировать нужные жизненные циклы в классе компонента

Порядок выполнения хуков на практике:

![1. Lifecycle orded](./images/1.%20Lifecycle%20order.png)

1. Вызывается конструктор
2. Вызывается `onChanges`
3. Вызывается после инициализации `onInit`
4. Вызывается "Changes detection", `ngDoCheck`
5. Вызывается `ngAfterContentEdit` после проверки нашего `ng-content`
6. Вызывается `ngAfterViewInit`
7. Вызывается `ngAfterViewChecked`

Так как Angular работает в dev-режиме, снова вызываются `ngDoCheck` и `ngAfterViewChecked`, в проде их быть не должно.

8. Пробуем изменить элемент, через кнопку и ловим `ngOnChanges` затем `ngDoCheck`, затем `ngAfterViewChecked`
9. Пробуем удалить элемент, через кнопку и ловим `ngOnDestroy`
