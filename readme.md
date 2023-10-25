Technologie wykorzystane do stworzenia tej aplikacji:
    ◊   next.js
    ◊   bootstrap
    ◊   react-bootstrap
    ◊   styled-components
    ◊   react-icons
    ◊   react-intersection-observer
    ◊   react-paginate

Problemy podczas tworzenia aplikacji:
    ◊   Podczas próby autoryzacji przy pomocy strategii innych, niż "local" otwierane jest nowe okno, gdzie przy pomocy konta google, facebook, lub github możliwe jest zalogowanie się do serwisu. Okno to jednak otwiera adres o innym adresie oraz komunikuje się z oknem-rodzicem przy pomocy postMessage okno to samo w sobie zaś musi otrzymać dane z backendu w sposób inny, niż sesja ze względu na wykorzystanie vercela jako hostingu, więc dane typu token jwt są przekazywane jako url param.
    ◊   Server mysql jest wolny w wyniku czego wysłanie poprawnego rządania mającego na celu zmianę danych w bazie, a następnie natychmiastowe zapytanie od te dane w odpowiedzi otrzyma rekord bez zmian, gdyż ta operacja jest asynchroniczna. W związku z tym front posiada funkcje imitujące wykonywanie takich operacji jak delete, insert, update, by od razu po wykonaniu poprawnego rządania wyświetlić zmienione dane jeszcze przed wprowadzeniem tych zmian w oficjalnej bazie danych.

Adresy:
    ◊   / - zawierająca CRUDA (strona dostępna bez logowania, jednak nie pozwoli na manipulowanie bazą danych)
    ◊   /login - podstrona zawierająca formularz do służący logowania (strona dostępna tylko jeśli nie jesteś już zalogowany)
    ◊   /signin - podstrona zawierająca formularz służący do zakłożenia nowego konta (strona dostępna tylko jeśli nie jesteś już zalogowany)
    ◊   /resource_code - strona na której się aktualnie znajdujesz
    ◊   /login/login_success - ścieżka do której jest przykierowywany użytkownik po próbie zalogowania się przez: google, facebooka, czy github zakończonej pomyślnie
    ◊   /login/login_failure - ścieżka do której jest przykierowywany użytkownik po próbie zalogowania się przez: google, facebooka, czy github zakończonej NIEpomyślnie
