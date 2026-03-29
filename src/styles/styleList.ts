// List of all UI styles available in the application
export const UI_STYLES = [
  {
    id: "flat-design",
    name: "Flat Design",
    description: "Design minimaliste et épuré"
  },
  {
    id: "soft-ui",
    name: "Soft UI 2.0",
    description: "Neumorphisme avec ombres douces"
  },
  {
    id: "neobrutalism",
    name: "Néobrutalisme",
    description: "Couleurs vives et bordures marquées"
  },
  {
    id: "glassmorphism",
    name: "Glassmorphisme",
    description: "Effet verre dépoli transparent"
  },
  {
    id: "claymorphism",
    name: "Claymorphisme",
    description: "Style argile 3D doux"
  },
  {
    id: "material-design",
    name: "Material Design",
    description: "Guidelines Google Material"
  },
  {
    id: "skeuomorphism",
    name: "Skeuomorphisme",
    description: "Imitation réaliste des objets"
  },
  { id: "minimalism", name: "Minimalism", description: "Épuré à l'extrême" },
  {
    id: "dark-mode",
    name: "Dark Mode UI",
    description: "Interface sombre élégante"
  },
  {
    id: "gradient-design",
    name: "Gradient Design",
    description: "Dégradés colorés modernes"
  },
  {
    id: "aurora-ui",
    name: "Aurora UI",
    description: "Couleurs aurores boréales"
  },
  {
    id: "frosted-glass",
    name: "Frosted Glass UI",
    description: "Verre givré translucide"
  },
  {
    id: "retro-y2k",
    name: "Retro/Y2K Design",
    description: "Nostalgie années 2000"
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk UI",
    description: "Néons et futurisme sombre"
  },
  {
    id: "biomorphic",
    name: "Organic/Biomorphic",
    description: "Formes organiques naturelles"
  },
  {
    id: "3d-immersive",
    name: "3D/Immersive UI",
    description: "Profondeur et perspective 3D"
  },
  {
    id: "monochrome",
    name: "Monochrome Design",
    description: "Nuances d'une seule couleur"
  },
  {
    id: "duotone",
    name: "Duotone Design",
    description: "Deux couleurs contrastées"
  },
  {
    id: "memphis",
    name: "Memphis Design",
    description: "Géométrie colorée des années 80"
  },
  {
    id: "swiss-style",
    name: "Swiss/International",
    description: "Typographie et grilles suisses"
  }
] as const;

export type StyleId = (typeof UI_STYLES)[number]["id"];

export interface UIStyle {
  id: StyleId;
  name: string;
  description: string;
}

export const DEFAULT_STYLE: StyleId = "flat-design";
