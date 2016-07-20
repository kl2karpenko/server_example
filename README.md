## ДЗ

Используем структуру которая есть в данном проекте, вам нужен будет файл index.html и xhr.js

Это задание нужно вам для того чтобы научиться работать с сервером, задание состоит в том что бы вы:

1. Реализовали запрос за списком контактов и вывели их на страницу в элемент ul#phoneNumbers
2. Реализовали добавление нового контакта в список, при этом у вас появиться новый элемент и в дом дереве, и в списке контактов который
    храниться в глобальной переменной "phoneList", после добавления нового элемента в дом дерево также мы отправляем put запрос на /phones для 
    сохранения нового контакта в списке вида:
        
        ```
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', '/phones', false);
        xhr.send(JSON.stringify({name: "тут значения из инпута", number: "тут значения из инпута"}));
        
        // при отправке такого запроса также нужно поставить правильный хедер:
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        ```

3. Реализовать удаление контакта из списка: при нажатии на кнопку удалить удаляем контакт из дом дерева и посылаем post запрос 

        ```
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/phones', false);
        xhr.send(JSON.stringify(phoneList));
        
        /**
        где phoneList - это массив в котором храняться все данные по контактам, и при удалении контакта вы должны удалить этот конкретный контакт из списка
        phoneList а потом отправить обновленный список на сервер
        */
        
        // при отправке такого запроса также нужно поставить правильный хедер:
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        ```


## Пример работы с сервером

В этой папке я создала тестовый реозиторий чтобы вы могли попробовать поработать с сервером и сохранять данные
локально на своем компьютере

Как с этим работать:

1. Склонируйте себе этот репозиторий 
2. Устновите себе глобально "nodeJS" и "npm"
3. После установки nodeJS прогоните в командной строке WebStorm 

        ```
        $ npm i
        ```

    эта команда установит список всех зависимостей который описаны в файле package.json

4. После установки всех зависимостей вы сможете запустить сервер из консоли, для этого вводите из рута папки

        
        ```
        $ node server.js
        ```

        это запускает сервер и пока эта команда не будет остановлена (через CTRl+C) она будет работать 
        то есть принимать запросы и обрабатывать их
        
        Внимание после остановки сервера все изменения данных внутри сервера будут затерты просто чтобы вы не удивлялись

5. После того как вы запустили сервер вы должны зайти в браузере по ссылке :  http://localhost:8088 и смотреть работу вашего приложения!