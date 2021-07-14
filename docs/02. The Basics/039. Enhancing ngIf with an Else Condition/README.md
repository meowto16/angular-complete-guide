# Улучшаем ngIf с Else условием

Для того чтобы создать `else` условие, мы создаем `<ng-template>`, даем ему локальную ссылку `#noServer`.

Затем в нашем параграфе с `ngIf`, добавляем условие `*ngIf="serverCreated; else noServer`, что означает, что будет отображен
другой элемент, если условие не выполняется.

```angular2html
<p class="my-2" *ngIf="serverCreated; else noServer">Server was created, server name is {{ serverName }}</p>
<ng-template class="my-2" #noServer>
<p class="my-2">No server was created!</p>
</ng-template>
```
