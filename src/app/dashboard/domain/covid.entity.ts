export interface Covid {
  provinceState?: string;
  countryRegion: string;
  lastUpdate: number;
  lat?: number;
  long?: number;
  confirmed: number;
  recovered: number;
  deaths: number;
  active?: number;
  admin2?: string;
  fips?: string;
  combinedKey: string;
  incidentRate?: number;
  peopleTested?: any;
  peopleHospitalized?: any;
  uid: number;
  iso3?: string;
  iso2?: string;
}
