export interface CensusCategory {
  id: string;
  title: string;
  description: string;
}

export interface CensusPhase {
  id: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  categories: CensusCategory[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SafetyGuideline {
  id: string;
  topic: string;
  do: string[];
  dont: string[];
}

export interface StateSchedule {
  stateCode: string;
  stateName: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'unknown';
  selfEnumerationPeriod: string | null;
  houseListingPeriod: string | null;
  populationEnumerationPeriod: string | null;
  notes: string | null;
}
