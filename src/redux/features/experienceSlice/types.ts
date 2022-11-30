export interface Experience {
  _id?: string;
  owner: string;
  location: string;
  price: number;
  detail: string;
}

export type Experiences = Experience[];

export interface ExperienceState {
  experienceList: Experience[];
}
