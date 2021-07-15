# Устанавливаем Bootstrap правильно

В следующей лекции мы будем подготавливать наш проект. Для этого мы будем использовать Bootstrap CSS фреймворк.

В этом курсе, мы используем **3** версию фреймворка. Устанавливается так: `npm install --save bootstrap@3` => `@3` важно!

Также, если мы используем проект созданный при помощи `Angular CLI 6+` (проверить можно при помощи `ng v`), у нас будет
файл `angular.json` вместо `.angular-cli.json`.

В данном файле нам все еще нужно будет добавить Bootstrap в `styles[]` массив, как показано в следующем видео, но путь
будет `node_modules/bootstrap/dist/css/bootstrap.min.css`, **НЕ** `../node_modules/bootstrap/dist/css/bootstrap.min.css`.
