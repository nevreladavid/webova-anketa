# Webová anketa

Jednoduchá webová anketa postavená na Node.js s Express.js a EJS.

## Popis

Tato aplikace umožňuje uživatelům vyplnit anketu s otázkami o jménu, věku, oblíbeném programovacím jazyku, úrovni zkušeností a komentáři. Odpovědi se ukládají do souboru `responses.json` a lze je zobrazit na stránce výsledků.

## Požadavky

- Node.js (doporučeno: poslední verze)
- NPM (správce balíčků)

## Instalace

1. Naklonujte nebo stáhněte projekt.
2. Spusťte `npm install` pro instalaci závislostí.

## Spuštění

Spusťte server pomocí:

```
npm start
```

Server bude běžet na `http://localhost:3000`.

Otevřete tuto adresu v prohlížeči pro přístup k anketě.

## Funkce

- **Anketa**: Formulář s různými typy otázek (text, číslo, select, radio, textarea).
- **Ukládání odpovědí**: Odpovědi se ukládají do `responses.json`.
- **Výsledky**: Tabulka se všemi odpověďmi na `/results`.

## Struktura projektu

- `server.js`: Hlavní soubor serveru (Express.js s EJS)
- `views/index.ejs`: Šablona pro anketu
- `views/results.ejs`: Šablona pro výsledky
- `responses.json`: Soubor s odpověďmi
- `package.json`: Konfigurace projektu a závislosti

## Poznámky

Odpovědi se ukládají do souboru `responses.json` ve formátu JSON.