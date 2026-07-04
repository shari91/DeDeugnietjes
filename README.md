# De Deugnietjes

Website voor kinderdagverblijf **KDV De Deugnietjes** — een statische one-page site.

## Stack

- [Vite](https://vite.dev/) 8 — build-tool & dev-server
- [React](https://react.dev/) 19 + TypeScript 6
- CSS Modules voor styling (geen UI-framework)

## Aan de slag

```bash
npm install      # dependencies installeren
npm run dev      # dev-server op http://localhost:5173
npm run build    # productiebuild naar dist/
npm run preview  # de productiebuild lokaal bekijken
```

## Contactformulier werkend maken

Het formulier in de contactsectie verstuurt e-mails via [Web3Forms](https://web3forms.com)
(gratis, geen eigen server nodig). Zolang de access key nog niet is ingevuld, komt er
**geen mail** aan. Zo zet je het aan:

1. Ga naar [web3forms.com](https://web3forms.com) en vul het ontvangst-e-mailadres in
   (`dedeugnietjes@telenet.be`). Je krijgt meteen een **Access Key** te zien (en ter
   bevestiging ook in je mailbox).
2. Open [`src/components/sections/Contact/ContactModal.tsx`](src/components/sections/Contact/ContactModal.tsx)
   en vervang bovenaan de placeholder door je eigen key:
   ```ts
   const WEB3FORMS_ACCESS_KEY = 'PLAK-HIER-JE-WEB3FORMS-ACCESS-KEY'
   ```
3. Opslaan, opnieuw builden (`npm run build`) en de site publiceren. Test daarna even
   door zelf een bericht te versturen.

> Wil je later naar een ander e-mailadres ontvangen? Maak een nieuwe (gratis) key aan met
> dat adres en vervang enkel die ene regel.

## Structuur

- `index.html` — HTML-entry (in de root)
- `src/index.tsx` — React-entry (`createRoot`)
- `src/App.tsx` — layout: navigatie + de secties
- `src/components/sections/*` — de secties (Navigation, Home, Vision, Gallery, About, Contact, Footer), elk met een eigen `*.module.css`
- `src/index.css` — globale stijl + design-tokens (CSS-variabelen met de huisstijlkleuren)
- `src/hooks/` — kleine helpers (o.a. `useMediaQuery`)
- `public/` — statische bestanden (favicon, manifest, lettertype)
