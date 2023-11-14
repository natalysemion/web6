export interface ICharacters {
  info: Info;
  results?: ResultsEntity[] | null;
}
export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: null;
}
export interface ResultsEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginOrLocation;
  location: OriginOrLocation;
  image: string;
  episode?: string[] | null;
  url: string;
  created: string;
}
export interface OriginOrLocation {
  name: string;
  url: string;
}
