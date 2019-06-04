# Чат-бот на JS 

(Meetup SaratovJS 2019)

Для работы бота скачиваем [Node JS](https://nodejs.org/en/). 
Устанавливаем. 
Перезагружаемся. Для проверки все ли установилось, в командную строку пишем 
```
npm -v
```
![npm-execute](https://pp.userapi.com/c852236/v852236721/1244e6/VPVJYUP4IgY.jpg "Версия пакетного менеджера")

Если появилась версия Node JS, то все установилось.

## Подготовка группы

1. Создаем сообщество в ВК.

2. Заходим в настройки => работа с API => создать ключ ![create-key](https://pp.userapi.com/c853528/v853528007/45c43/AC_fNhP01uU.jpg)

3. Обязательно отмечаем там все галочки и нажимаем **создать** ![checkbox](https://pp.userapi.com/c853528/v853528007/45c4c/1i9EUcWVBcU.jpg)

4. <a id="token"></a>После, **сохраняем** созданный ключ в файл txt, он понадобится для работы кода ![api-key](https://pp.userapi.com/c853528/v853528007/45c56/UmxxDpEfONQ.jpg)

5. Заходим в раздел **Long Poll API** и включаем его. Ставим версию **5.80** ![version-api](https://pp.userapi.com/c852236/v852236721/1244bb/GsDOvdcxRvE.jpg)

6. Подписываемся на события, это позволит боту получать сообшения. Ставим все галочки ![events](https://pp.userapi.com/c852236/v852236721/1244c4/QRA72V6bSZ0.jpg)

7. Включаем возможность писать боту. В настройках сообщества заходим в **сообщения** и нажимаем СОХРАНИТЬ![msg](https://pp.userapi.com/c852236/v852236721/1244cd/hu-HX0wM4IQ.jpg)

8. Спускаемся в подраздел **Настройки для бота**, включаем там возможности ботов, нажимаем СОХРАНИТЬ ![save-btn](https://pp.userapi.com/c852236/v852236721/1244d6/3ultVaAMbh0.jpg)

9. <a id="group_id"></a>Получаем ID сообщества из главных настроек. **Сохраняем** его в файлик ![get-id](https://pp.userapi.com/c852236/v852236721/1244df/Tfp2i_G8wmc.jpg "Да, его тоже нужно скопировать куда-то")

## Запускаем бота 🔥
Код удобнее писать в [Visual Studio Code](https://code.visualstudio.com/)

1. Открываем папку с этим проектом на компьютере. Открываем этот проект в VS Code ![vs-code](https://pp.userapi.com/c852236/v852236721/124575/IjgHhD5xLUM.jpg "Web Strom конечно тоже ничего такой :) ")

2. Открываем файл **index.js** И вставляем <a href="#token">токен</a> и <a href="#group_id">ID группы</a> в файл бота. ![insert](https://pp.userapi.com/c852236/v852236721/124562/kK0uIK7TLe0.jpg "Ты же их сохранил, да?")

3. Открываем терминал. ![terminal](https://pp.userapi.com/c852236/v852236394/129aba/howk49w_xRE.jpg)

4. Загружаем вспомогательные библиотеки  - вводим в терминал команду 
```
npm i
```
 ![npm-i](https://pp.userapi.com/c852236/v852236394/129acb/iYoFEGawe2Y.jpg "Почти как npm install")

5. Запуск бота командой
```
npm start
```
![start](https://pp.userapi.com/c852236/v852236394/129ae0/780XPVMXQ0A.jpg)

### Можем написать боту в личные сообщения!
