Je souhaite réaliser un projet qui expose un maximum de styles UI/UX contemporains et innovants. Parmi les styles à explorer, je souhaite inclure notamment :

1. Soft UI 2.0 (Neumorphism)
2. Néobrutalisme
3. Glassmorphisme (Glacemorphisme)
4. Claymorphisme (style argile)
5. Flat Design
6. Material Design
7. Skeuomorphisme
8. Minimalism
9. Dark Mode UI
10. Gradient Design
11. Aurora UI
12. Frosted Glass UI
13. Retro/Y2K Design
14. Cyberpunk UI
15. Organic/Biomorphic Design
16. 3D/Immersive UI
17. Monochrome Design
18. Duotone Design
19. Memphis Design
20. Swiss/International Style

## Objectif du projet

Présenter une page unique en contenu, contenant un ensemble de widgets et composants classiques que l'on retrouve dans les design systems modernes. Cette page sera déclinée visuellement selon les 20 styles UI listés ci-dessus.

## Architecture technique

### Stack technologique

- **Framework** : Vite + React
- **Langage** : TypeScript
- **Icônes** : Heroicons (@heroicons/react)
- **CSS** : Vanilla CSS avec variables natives

### Organisation des fichiers

Le projet doit être **décomposé en petits fichiers** pour faciliter les modifications ciblées :

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── StyleSidebar.tsx      # Sidebar de sélection des styles
│   │   ├── Breadcrumb.tsx
│   │   └── MobileMenu.tsx        # Menu burger pour mobile
│   ├── forms/
│   │   ├── TextInput.tsx
│   │   ├── SearchInput.tsx
│   │   ├── Textarea.tsx
│   │   ├── Select.tsx
│   │   ├── Checkbox.tsx
│   │   ├── RadioButton.tsx
│   │   ├── Toggle.tsx
│   │   ├── DatePicker.tsx
│   │   └── RangeSlider.tsx
│   ├── buttons/
│   │   ├── Button.tsx
│   │   ├── IconButton.tsx
│   │   ├── ButtonGroup.tsx
│   │   └── FAB.tsx
│   ├── feedback/
│   │   ├── Spinner.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── Badge.tsx
│   │   ├── Alert.tsx
│   │   ├── Tooltip.tsx
│   │   └── Toast.tsx
│   ├── containers/
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Accordion.tsx
│   │   ├── Tabs.tsx
│   │   └── DataTable.tsx
│   └── media/
│       ├── Avatar.tsx
│       ├── Thumbnail.tsx
│       ├── Tag.tsx
│       └── Pagination.tsx
├── styles/
│   ├── base.css              # Reset et styles communs
│   ├── layout.css            # Styles de structure (sidebar, grille)
│   ├── responsive.css        # Media queries pour tablette/mobile
│   ├── animations.css        # Micro-animations et transitions
│   ├── soft-ui.css
│   ├── neobrutalism.css
│   ├── glassmorphism.css
│   ├── claymorphism.css
│   ├── flat-design.css
│   ├── material-design.css
│   ├── skeuomorphism.css
│   ├── minimalism.css
│   ├── dark-mode.css
│   ├── gradient-design.css
│   ├── aurora-ui.css
│   ├── frosted-glass.css
│   ├── retro-y2k.css
│   ├── cyberpunk.css
│   ├── biomorphic.css
│   ├── 3d-immersive.css
│   ├── monochrome.css
│   ├── duotone.css
│   ├── memphis.css
│   └── swiss-style.css
├── hooks/
│   └── useStyle.ts           # Hook pour gérer le style actif
├── context/
│   └── StyleContext.tsx      # Context React pour le style global
├── App.tsx
└── main.tsx
```

### Système de changement de style

- Une **classe CSS sur le `<body>`** permet de switcher entre les styles
- Exemple : `<body class="style-glassmorphism">` ou `<body class="style-neobrutalism">`
- Une **sidebar fixe à gauche** affiche la liste des 20 styles et permet de changer dynamiquement
- Sur mobile, la sidebar devient un **menu burger**
- Tous les fichiers CSS sont chargés, mais les styles sont scopés par la classe du body

```css
/* Exemple dans glassmorphism.css */
body.style-glassmorphism .card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Contraintes de développement

1. **Modularité** : Chaque composant dans son propre fichier
2. **Isolation** : Les modifications d'un style n'impactent pas les autres
3. **Réutilisabilité** : Les composants React sont identiques quel que soit le style
4. **Maintenabilité** : Faciliter les modifications ciblées sans réécrire tout le projet

Cette approche garantit que la structure reste identique et permet de comparer facilement l'impact visuel de chaque style sur les mêmes composants.

## Composants à inclure (Design System)

### Navigation & Layout

- Header avec logo
- Menu de navigation principal
- Breadcrumb (fil d'Ariane)
- Sidebar / Menu latéral
- Footer

### Formulaires & Inputs

- Champs de texte (text input)
- Champs de recherche (search input)
- Textarea
- Select / Dropdown
- Checkbox
- Radio buttons
- Toggle / Switch
- Date picker
- Range slider

### Boutons & Actions

- Boutons primaires
- Boutons secondaires
- Boutons outline
- Boutons icône
- Boutons groupe
- Floating Action Button (FAB)

### Feedback & Indicateurs

- Spinners / Loaders
- Barres de progression
- Badges
- Alertes / Notifications
- Tooltips
- Snackbars / Toasts

### Conteneurs & Cartes

- Cards (cartes)
- Modals / Dialogs
- Accordions
- Tabs (onglets)
- Tables / Data grids

### Médias & Avatars

- Avatar
- Image thumbnails
- Tags / Chips
- Pagination

L'objectif final est de mettre en avant les spécificités visuelles de chaque style et leur impact sur l'expérience utilisateur (UX).

## Décisions UI/UX

### Interface principale

- **Sélecteur de style** : Sidebar fixe à gauche avec la liste des 20 styles
- **Layout** : Page unique scrollable, composants organisés par sections
- **Textes** : Contenus réalistes en français ("Ajouter au panier", "Connexion", etc.)

### Bibliothèque d'icônes

- **Heroicons** (via @heroicons/react)

### Interactions & Animations

- **États complets** : hover, focus, active, disabled pour chaque composant
- **Transitions douces** au changement de style
- **Micro-animations** : spinners animés, effets hover élaborés, feedback visuel

### Responsive Design

- **Full responsive** : adaptation complète desktop / tablette / mobile
- La sidebar devient un menu burger sur mobile

### Technologie CSS

- **CSS vanilla pur** avec variables CSS natives
- Pas de préprocesseur (Sass/SCSS)
- Un fichier CSS par style, scopé via classe sur le `<body>`
