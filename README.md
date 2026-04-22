# Webova-anketa

Klikni na odkaz níže pro přístup k live aplikaci:

🔗 **[Webová anketa](https://webova-anketa.example.com/)** (bude dostupné po nasazení na hosting)

## Popis

Jednoduchá webová anketa postevená na Node.js s Express.js a EJS. Uživatelé mohou vyplnit anketu s otázkami o:
- Jménu
- Věku
- Oblíbeném programovacím jazyku
- Úrovni zkušeností (Začátečník/Středně pokročilý/Pokročilý)
- Komentáři

Všechny odpovědi se ukládají a lze je zobrazit v tabulce výsledků.

## Technologie

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **EJS** - Template engine
- **Bootstrap 5** - CSS framework
- **JSON** - Ukládání dat

## Instalace a spuštění

```bash
# Naklonuj repo
git clone https://github.com/nevreladavid/webova-anketa.git
cd webova-anketa

# Instalace závislostí
npm install

# Spuštění serveru
npm start
```

Server bude běžet na `http://localhost:3000`.

## Struktura projektu

```
webova-anketa/
├── views/              # EJS šablony
│   ├── index.ejs      # Formulář ankety
│   └── results.ejs    # Tabulka výsledků
├── server.js          # Hlavní server
├── responses.json     # Uložené odpovědi
├── package.json       # Závislosti
└── README.md          # Tento soubor
```

## Funkce

✅ Formulář s různými typy otázek  
✅ Ukládání odpovědí do JSON  
✅ Tabulka s výsledky všech odpovědí  
✅ Seřazení odpovědí od nejnovější  
✅ Responsivní design s Bootstrapem

## Autor

nevreladavid