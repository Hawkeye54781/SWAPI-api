export interface Candidates {
  count: number;
  next: string;
  previous : string;
  results: Candidate[];
}

export interface Candidate {
  name: string;
  height: string;
  mass: number;
  created: boolean;
  edited: boolean;
  homeworld: string;
  homeworldName: string;
}

export interface HomeWorld {
  name: string;
  diameter: number;
  climate: string;
  population: number;
}
