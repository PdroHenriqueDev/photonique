import { CityProps } from 'app/models/variables/city.model';
import citiesJson from './cities.json';

export const cities = citiesJson;

export const citiesByState = (state: string) => {
  const allCities = citiesJson;

  const filteredCities = allCities.filter((city: CityProps) => city.state === state);

  return filteredCities;
};