# Введение в модуль

В данном модуле будут рассмотрены сервисы и внедрение зависимостей.

Сервисы нужны для того, чтобы расшаривать какую-либо бизнес-логику между компонентами, чтобы не повторять
ее постоянно.

Проблемы которые решают сервисы:

1. Дублирование кода
2. Размещение данных и проброс их в компоненты

Сервисы в Angular представляют довольно широкий спектр классов, которые выполняют некоторые специфические задачи, например, логгирование, работу с данными и т.д.

В отличие от компонентов и директив сервисы не работают с представлениями, то есть с разметкой html, не оказывают на нее прямого влияния. Они выполняют строго определенную и достаточно узкую задачу.

Стандартные задачи сервисов:

Предоставление данных приложению. Сервис может сам хранить данные в памяти, либо для получения данных может обращаться к какому-нибудь источнику данных, например, к серверу.

Сервис может представлять канал взаимодействия между отдельными компонентами приложения

Сервис может инкапсулировать бизнес-логику, различные вычислительные задачи, задачи по логгированию, 
которые лучше выносить из компонентов. Тем самым код компонентов будет сосредоточен непосредственно 
на работе с представлением. Кроме того, тем самым мы также можем решить проблему повторения кода, 
если нам потребуется выполнить одну и ту же задачу в разных компонентах и классах
