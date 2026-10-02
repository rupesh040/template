import {
  Home,
  Building2,
  CookingPot,
  Bath,
  Sofa,
  LucideIcon,
} from "lucide-react";
import content from "./content.json";

// Icons can't live in JSON — map string keys to real Lucide components here
const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  CookingPot,
  Bath,
  Sofa,
};

// All text/data comes from content.json; icons are merged in from iconMap
export const services = content.services.map((s) => ({
  ...s,
  icon: iconMap[s.icon] ?? Home,
}));

// Convenience type inferred from the merged array
export type ServiceDetail = (typeof services)[number];