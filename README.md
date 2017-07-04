<h1>Active Directory telefonbok</h1>
Helt enkel telefonbok som er bygget på NodeJS, Express, Cronjs, Bootstrap og API for Active Directory (https://github.com/gheeres/node-activedirectory), Eazy Autocomplete og Font Awesome.

<h2>Krav</h2>
- NodeJS

<h2>Bruk</h2>
-adphonebook.js: Denne henter informasjon fra AD og legger det i JSON-filen. Følgende informasjon hentes fra AD: 'mobile', 'title', 'company', 'department','physicalDeliveryOfficeName','ipPhone', 'sn', 'givenName', 'mail', 'userPrinicipalName','displayName'. Denne må kjøres regelmessig etter endringer eller lignende i AD (kan skreduleres).
</br>
-web.js: her kjøres WEB-tjenesten fra (Express).
