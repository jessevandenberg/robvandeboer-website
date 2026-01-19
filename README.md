# Tegelhandel Rob v.d. Boer - Website

Een moderne, responsive website voor Tegelhandel Rob v.d. Boer, een gespecialiseerde tegelhandel in Oss, Nederland. De website is gebouwd met Next.js en biedt een overzichtelijk platform voor het presenteren van het assortiment, showroom informatie, en contactgegevens.

## 📋 Inhoudsopgave

- [Over het Project](#over-het-project)
- [Features](#features)
- [Technologieën](#technologieën)
- [Installatie](#installatie)
- [Project Structuur](#project-structuur)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Styling & Design](#styling--design)
- [Componenten](#componenten)
- [Pagina's](#paginas)
- [Bekende Issues](#bekende-issues)
- [Toekomstige Verbeteringen](#toekomstige-verbeteringen)
- [Licentie](#licentie)

## 🎯 Over het Project

Deze website is ontwikkeld voor Tegelhandel Rob v.d. Boer, een familiebedrijf gespecialiseerd in keramische tegels. De website presenteert het uitgebreide assortiment, toont informatie over de showroom, en biedt eenvoudige manieren om contact op te nemen.

### Doelgroep
- Particulieren op zoek naar tegels voor badkamer, keuken of andere ruimtes
- Professionals in de bouw- en renovatiebranche
- Interessenten die informatie willen over het assortiment en de showroom

## ✨ Features

### Homepage
- **Full-screen slideshow** met automatische dia-overgang
- Dynamische tekst per slide
- Handmatige navigatie met pijlen en paginatie dots
- Responsive design voor alle schermformaten

### Assortiment Pagina
- Overzicht van productcategorieën (Vloertegels, Wandtegels, Mozaïek)
- Dealerschappen sectie met klikbare Instagram links
- Interactieve merken carousel
- Showroom informatie en openingstijden

### Showroom Pagina
- Uitgebreide informatie over de showroom
- Foto's van het assortiment
- Informatie over acties en schoonmaakmiddelen
- Twee-sectie layout met grijze achtergrond

### Over Ons Pagina
- Verhaal van het bedrijf
- Informatie over advies en service
- Familiebedrijf achtergrond

### Contact Pagina
- Meerdere contactmogelijkheden (telefoon, email, showroom)
- Interactieve iconen
- Volledige showroom informatie met openingstijden
- Externe afbeelding van de showroom

### Algemene Features
- **Responsive design** - Volledig geoptimaliseerd voor mobiel, tablet en desktop
- **Hamburger menu** - Mobiele navigatie met uitklapbaar menu
- **Hero secties** - Elke pagina heeft een indrukwekkende hero sectie met overlay
- **Diagonale V-vorm overlay** - Uniek design element onderaan hero secties
- **Google Fonts** - Playfair Display voor headings, Heebo voor body tekst
- **Image optimization** - Next.js Image component voor geoptimaliseerde afbeeldingen

## 🛠 Technologieën

### Core
- **[Next.js 16.1.1](https://nextjs.org/)** - React framework met App Router
- **[React 19.2.3](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PostCSS](https://postcss.org/)** - CSS processing

### Fonts
- **Playfair Display** - Serif font voor headings (regular & bold)
- **Heebo** - Sans-serif font voor body tekst (400, 500, 600, 700)

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **Next.js ESLint Config** - Aangepaste linting regels

## 📦 Installatie

### Vereisten
- Node.js 18+ 
- npm of yarn

### Stappen

1. **Clone het repository** (of download de source code)
   ```bash
   git clone <repository-url>
   cd robvandeboer-website
   ```

2. **Installeer dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open de browser**
   Navigeer naar [http://localhost:3000](http://localhost:3000)

## 📁 Project Structuur

```
robvandeboer-website/
├── app/                          # Next.js App Router directory
│   ├── assortiment/             # Assortiment pagina
│   │   └── page.tsx
│   ├── components/              # Herbruikbare componenten
│   │   ├── Footer.tsx           # Footer component
│   │   └── Header.tsx           # Header met navigatie
│   ├── contact/                 # Contact pagina
│   │   └── page.tsx
│   ├── images/                  # Alle afbeeldingen
│   │   ├── logo.png
│   │   ├── winkel 1.png
│   │   ├── homepage*.png
│   │   └── ...
│   ├── over-ons/                # Over Ons pagina
│   │   └── page.tsx
│   ├── showroom/                # Showroom pagina
│   │   └── page.tsx
│   ├── globals.css              # Globale CSS styles
│   ├── layout.tsx               # Root layout met fonts
│   └── page.tsx                 # Homepage
├── public/                      # Statische bestanden
├── node_modules/                # Dependencies
├── .eslintrc.json              # ESLint configuratie
├── next.config.ts               # Next.js configuratie
├── package.json                # Project dependencies
├── postcss.config.mjs           # PostCSS configuratie
├── tsconfig.json               # TypeScript configuratie
└── README.md                   # Dit bestand
```

## 🚀 Development

### Beschikbare Scripts

```bash
# Development server starten
npm run dev

# Production build maken
npm run build

# Production server starten
npm start

# Linting uitvoeren
npm run lint
```

### Development Workflow

1. **Wijzigingen maken** in de `app/` directory
2. **Automatische hot-reload** - Wijzigingen zijn direct zichtbaar in de browser
3. **Linting** - ESLint controleert automatisch op fouten
4. **Type checking** - TypeScript controleert types tijdens development

### Best Practices

- Gebruik TypeScript voor type safety
- Volg de bestaande component structuur
- Houd rekening met responsive design
- Test op verschillende schermformaten
- Gebruik Next.js Image component voor alle afbeeldingen

## 🏗 Build & Deployment

### Production Build

```bash
npm run build
```

Dit genereert een geoptimaliseerde production build in de `.next/` directory.

### Deployment Opties

#### Vercel (Aanbevolen)
1. Push code naar GitHub/GitLab
2. Import project in Vercel
3. Vercel detecteert automatisch Next.js en configureert alles

#### Andere Platforms
- **Netlify** - Ondersteunt Next.js
- **AWS Amplify** - Voor AWS deployments
- **Docker** - Voor containerized deployments

### Environment Variables

Momenteel zijn er geen environment variables nodig. Indien nodig kunnen deze worden toegevoegd in een `.env.local` bestand.

## 🎨 Styling & Design

### Kleuren

- **Primair grijs**: `#D9D9D9` - Gebruikt voor achtergronden
- **Donkergrijs**: `bg-gray-800` - Footer achtergrond
- **Wit**: `bg-white` - Cards en secties
- **Zwart overlay**: `bg-black/30` - Voor tekst leesbaarheid

### Typography

- **Headings**: Playfair Display (serif)
  - Regular (400) en Bold (700)
- **Body tekst**: Heebo (sans-serif)
  - Weights: 400, 500, 600, 700

### Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)

### Design Elementen

- **V-vorm overlay**: Unieke diagonale overlay onderaan hero secties
- **Glassmorphism**: Doorzichtige header met backdrop blur
- **Smooth transitions**: Hover effecten en animaties
- **Image overlays**: Verduisterende overlays voor betere tekst leesbaarheid

## 🧩 Componenten

### Header Component (`app/components/Header.tsx`)

- Responsive navigatie
- Hamburger menu voor mobiel
- Logo met link naar homepage
- Doorzichtige achtergrond met blur effect
- Z-index 50 voor bovenliggende positie

**Props**: Geen (standalone component)

### Footer Component (`app/components/Footer.tsx`)

- Drie kolommen layout
- Sitemap links
- Showroom informatie
- Contact informatie
- Copyright notice

**Props**: Geen (standalone component)

## 📄 Pagina's

### Homepage (`app/page.tsx`)

**Features:**
- Full-screen slideshow met 2 slides
- Automatische overgang (7 seconden)
- Handmatige navigatie
- Responsive tekst sizing
- Diagonale overlay

**State Management:**
- `currentIndex`: Huidige slide index
- `isPaused`: Pause state bij hover

### Assortiment (`app/assortiment/page.tsx`)

**Secties:**
1. Hero met "assortiment" titel
2. Ons Assortiment - 3 product categorieën
3. Dealerschappen - 3 dealer cards met Instagram links
4. Onze Merken - Interactieve carousel
5. Kom bij ons langs - Showroom info

**State Management:**
- `brandIndex`: Huidige merk in carousel

### Showroom (`app/showroom/page.tsx`)

**Secties:**
1. Hero sectie
2. Eerste content sectie (wit)
3. Tweede content sectie (grijs #D9D9D9)

**Content:**
- Groot assortiment
- Grote voorraad
- Monster meenemen
- Acties
- Schoonmaakmiddelen

### Over Ons (`app/over-ons/page.tsx`)

**Secties:**
1. Hero sectie
2. Eerste content sectie (wit)
3. Tweede content sectie (grijs #D9D9D9)

**Content:**
- Van Tegelboerke tot superspecialist
- Compleet assortiment
- Advies en service
- Familiebedrijf

### Contact (`app/contact/page.tsx`)

**Secties:**
1. Hero sectie
2. Heeft u een vraag? - 3 contact opties
3. Showroom informatie - Met afbeelding en openingstijden

**Contact Methoden:**
- Telefoon: 0412-622720
- Email: info@robvandeboer.nl
- Showroom: Kantsingel 10, 5349 AJ Oss

## 🔗 Externe Links

### Instagram Accounts
- **Cottoceramix**: [@cottoceramix](https://www.instagram.com/cottoceramix/)
- **MAPEI Nederland**: [@mapei_nederland](https://www.instagram.com/mapei_nederland/)
- **TMF Mosaic**: [@tmf_mosaic](https://www.instagram.com/tmf_mosaic/)

## 🐛 Bekende Issues

Geen bekende issues op dit moment.

## 🔮 Toekomstige Verbeteringen

Mogelijke toekomstige features:

- [ ] Contact formulier functionaliteit
- [ ] Product catalogus met filters
- [ ] Online afspraak systeem
- [ ] Blog/nieuws sectie
- [ ] Multi-language support (NL/EN)
- [ ] SEO optimalisaties
- [ ] Analytics integratie
- [ ] Newsletter signup
- [ ] Social media feed integratie

## 📝 Code Style

### TypeScript
- Strikte type checking
- Interface definities voor props
- Type-safe componenten

### React
- Functionele componenten
- Hooks voor state management
- Client components waar nodig (`"use client"`)

### CSS
- Tailwind utility classes
- Custom CSS alleen waar nodig
- Responsive-first approach

## 🤝 Bijdragen

Voor wijzigingen:
1. Maak een feature branch
2. Commit je wijzigingen
3. Push naar de branch
4. Open een Pull Request

## 📞 Contact & Support

Voor vragen over de website:
- **Email**: info@robvandeboer.nl
- **Telefoon**: 0412-622720
- **Showroom**: Kantsingel 10, 5349 AJ Oss

## 📄 Licentie

Dit project is privé eigendom van Tegelhandel Rob v.d. Boer.

## 🙏 Credits

- **Fonts**: Google Fonts (Playfair Display, Heebo)
- **Framework**: Next.js team
- **Styling**: Tailwind CSS team
- **Images**: Eigendom van Tegelhandel Rob v.d. Boer

---

**Laatste update**: 2024
**Versie**: 0.1.0
**Status**: Production Ready ✅
