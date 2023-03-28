/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CityProps } from 'app/models/variables/city.model';
import statesJson from './states.json';
import citiesJson from './cities.json';
import { StatePros } from 'app/models/variables/state.model';

export const cities = citiesJson;

export const citiesByState = (stateValue: string) => {
  const allCities = citiesJson;

  const findState = statesJson.find(
    (state: StatePros) => state.value === stateValue,
  );
  const id = findState?.id ?? 1;

  const filteredCities = allCities.filter(
    (city: CityProps) => city.state === id,
  );

  return filteredCities;
};
