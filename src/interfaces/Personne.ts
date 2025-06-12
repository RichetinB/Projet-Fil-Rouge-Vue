import type { Entreprise } from "./Entreprise";

export interface Civilite {
  id: number;
  label: string;
  created_at: string | null;
  updated_at: string | null;
}


export interface Localisation {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Personne {
  id: number;
  civilite_id: number | null;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  localisation_id: number | null;
  entreprise_id: number | null;
  created_at: string;
  updated_at: string;

  civilite?: Civilite;
  entreprise?: Entreprise;
  localisation?: Localisation;
}

