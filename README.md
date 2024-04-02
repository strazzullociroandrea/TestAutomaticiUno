# TestAutomaticiUno

Per eseguire senza il test:
1) Rimuovere il "type":"module" in package.json
2) Eliminare l'export in generaPassword.js ed aggiungere alla fine module.exports = generaPassword;
3) Mettere il require per importare generaPassword.js in index.js

Per eseguire con il test:
    -- npm test --