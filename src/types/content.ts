export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export type ServiceIconKey =
  | "design"
  | "nursery"
  | "plants"
  | "tools"
  | "irrigation"
  | "lighting"
  | "metalwork"
  | "turf";

export interface ServiceItem {
  number: string;
  icon: ServiceIconKey;
  title: string;
  description: string;
  plants?: string[];
}

export type PlantCategoryIconKey =
  | "low-light"
  | "indirect-light"
  | "wide-space"
  | "desk";

export interface PlantCategory {
  id: string;
  icon: PlantCategoryIconKey;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PlantItem {
  id: string;
  name: string;
  englishName: string;
  category: "all" | "low-light" | "indirect-light" | "wide-space" | "desk";
  image: string;
  lightLevel: string;
  careLevel: string;
  tag: string;
  description: string;
}
