import { CityProps } from 'app/models/variables/city.model'
import statesJson from './states.json'
import citiesJson from './cities.json'
import { StatePros } from 'app/models/variables/state.model'

export const cities = citiesJson

export const citiesByState = (stateValue: string) => {
  const allCities = citiesJson

  const findState = statesJson.find(
    (state: StatePros) => state.value === stateValue
  )
  const { id } = findState!

  const filteredCities = allCities.filter(
    (city: CityProps) => city.state === id
  )

  return filteredCities
}
