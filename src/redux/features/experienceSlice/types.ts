export interface Experience {
  id?: string;
  owner: string;
  title: string;
  picture: string;
  pictureBackUp?: string;
  location: string;
  price: number;
  detail: string;
}

export type Experiences = Experience[];

export interface ExperienceState {
  experienceList: Experience[];
}
