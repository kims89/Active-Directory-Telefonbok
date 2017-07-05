<h1>Active Directory telefonbok</h1>
Helt enkel telefonbok som er bygget på NodeJS, Express, Cronjs, Bootstrap og API for Active Directory (https://github.com/gheeres/node-activedirectory), Eazy Autocomplete og Font Awesome.

<h2>Krav</h2>

- NodeJS

- Har ikke testet på annet enn Linux-plattform.

<h2>Install</h2>

1. Install Nodejs https://nodejs.org

2. Last ned dette bibloteket. og deretter kjør "npm install" fra katalogen for å installere alle tilleggene som webtjenesten bruker.

3. Opprettet en bruker i AD som har leserettigheter i katalogen (Trenger stortsett bare å være medlem av domain_user). Opprett en gruppe, og meld inn alle brukerne som skal være medlem av telefonkatalogen.

4. Legg inn nødvendig Active Directory informasjonen i adphonebook.js

5. ANBEFALNING: Vil anbefale å bruke PM2 (Hvis du bruker linux som host for webtjenesten). Da er det mulig å legge webtjenesten inn som en tjeneste slik at den starter opp på ved boot.

6. Les koden nøye for å se hvordan den fungerer. Du skal kunne gjøre oppslag fra rot på port 80.


<h2>Bruk</h2>

- adphonebook.js: Denne henter informasjon fra AD og legger det i JSON-filen. Følgende informasjon hentes fra AD: 'mobile', 'title', 'company', 'department','physicalDeliveryOfficeName','ipPhone', 'sn', 'givenName', 'mail', 'userPrinicipalName','displayName'. Denne må kjøres regelmessig etter endringer eller lignende i AD (kan skreduleres).
</br></br>

- web.js: her kjøres WEB-tjenesten fra (Express).

<h2>Framtidige endringer</h2>

- Gjøre siden responsiv.


<h2>APIs</h2>

/sok - Viser alle objektene i json-format.

/sok/!navn! - Finner objektene som har har displayname med navnet lagt til som argument i jsonformat.
