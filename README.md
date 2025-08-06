# Test Finale Frontend – Sistemi Informativi S.p.A.

Questo progetto rappresenta il **frontend sviluppato come test finale** dell’Academy organizzata da **Sistemi Informativi S.p.A.**  
L’applicazione è realizzata in **Angular** (versione 18.0.7) e offre un’interfaccia utente semplice e intuitiva per interagire con servizi esterni e funzionalità di autenticazione.

## Descrizione del progetto

Il sito consente agli utenti di:

- **Registrarsi** tramite form dedicato
- **Effettuare il login** e accedere ad aree riservate
- **Cercare località** e visualizzarne informazioni meteorologiche aggiornate
- **Salvare località tra i preferiti**
- Visualizzare le **previsioni meteo**, grazie all’integrazione con API esterne

L'app comunica con un backend separato per la gestione delle autenticazioni e dei dati utente.

---

## Tecnologie utilizzate

- [Angular CLI](https://github.com/angular/angular-cli) v18.0.7
- TypeScript
- HTML5 / SCSS
- API REST
- Servizi di terze parti per dati meteo

---

## Avvio del progetto in locale

### Development server

Per avviare il server di sviluppo, esegui:

```bash
ng serve
 ```
Apri il browser su `http://localhost:4200/` per visualizzare l’applicazione.  
Il server si aggiornerà automaticamente ad ogni modifica del codice.

### Build del progetto

Per compilare il progetto in modalità produzione:

```bash
ng build
 ```
