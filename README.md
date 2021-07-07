# Inlämningsuppgift: Skapa en inloggningssida, 10 Yhp
## Inlämningsuppgift i kursen Webbapplikation MVP, 50 yhp från utbildningen Webbutvecklare .NET 2020-09-11 

### Scenario: 
Skapa en inloggningssida enligt kraven nedan.

### Lärdomar: 
* Att använda skapa och variabler, typer, funktioner, if och else satser, hantera klick på knappar med JavaScript.
* Att använda Localstorage för att spara data, manipulera webbläsarens Document Object Model, DOM.

### Kravspecifikation:
* Sidan skall ha en meny som innehåller två stycken input-fält, namn och lösenord, samt en knapp för att logga in.

* Namn och lösenord skall vara hårdkodade variabler i JavaScript och vara: namn = "test", lösenord = "1234".

* Vid rätt namn och lösenord så skall användaren mötas av en ny sida som välkomnar användaren till sidan.

* Vid fel lösenord så skall användaren mötas av en ny sida som informerar om att det blivit fel.

* Projektet skall enbart innehålla två stycken filer , index.html samt script.js och alla vyer skall ritas ut på index.html. (Det är frivilligt att använda en extern css fil, style.css men inga fler html filer).

* Det ska gå att spara inloggad användare i localStorage så att det går stänga ner webbsidan och fortfarande vara inloggad när användaren öppnar sidan igen.

* På välkomstsidan som visas när användaren är inloggad så skall det finnas en "logga ut" knapp som tömmer localStorage och loggar ut användaren.