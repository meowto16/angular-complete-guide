# Что такое Angular

Angular - это **Javascript фреймворк** которые позволяет делать реактивные SPA (Single page Application).

> SPA (Single page application) - это буквально одна страница, которая постоянно взаимодействует с пользователем, 
> динамически переписывая текущую страницу, а не загружая целые новые страницы с сервера. 

- У SPA всегда один HTML файл, и группа JS файлов.
- SPA быстрее за счет того, что изменения реактивно рендерятся в браузере, 
  а не делается постоянно новый запрос к серверу для получения HTML страницы.
  
Если мы посмотрим на HTML файл внутри, то увидим такую картину:

![01. Empty HTML file example](./images/01.%20Empty%20HTML%20file%20example.png)

Из этого можно сделать вывод, что первоначальная отрисовка страницы происходит сразу через Javascript.
