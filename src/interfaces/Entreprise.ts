import type { Personne } from "./Personne";

export interface Entreprise {
  id: number;
  nom: string;
  secteur_id: number | null;
  code_postal: string;
  ville: string;
  chiffre_affaires: number | null;
  created_at: string;
  updated_at: string;
  

  secteur?: Secteur;
  personnes?: Personne[];
}

export interface Secteur {
  id: number;
  label: string;
  created_at: string | null;
  updated_at: string | null;
}