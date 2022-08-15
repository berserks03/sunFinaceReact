import { City } from 'types/types';

export default class Cities {
  static createFromCollection(citiesData: City[]) {
    const citiesItems = citiesData.map((city) => ({
      ...city,
      dropdownText: createDropdownText(city),
      flagText: createFlagText(city),
      tempC: createTemp(city, true),
      tempF: createTemp(city, false),
      minMaxTextC: createMinMaxText(city, true),
      minMaxTextF: createMinMaxText(city, false),
      iconText: createIconText(city),
    }));

    return citiesItems;
  }
}

function createDropdownText(city: City):string {
  return city.name + ', ' + city.sys.country;
}

function createFlagText(city: City):string {
  return (
    'https://openweathermap.org/images/flags/' +
    city.sys.country.toLowerCase() +
    '.png'
  );
}

function createTemp(city: City, units: boolean):string {
  if (units) {
    return kToC(city.main.temp) + '°';
  } else {
    return kToF(city.main.temp) + '°';
  }
}

function createMinMaxText(city: City, units: boolean):string {
  if(units) {
    return `${kToC(city.main.temp_min)}°/${kToC(city.main.temp_max)}°`;
  } else {
    return `${kToF(city.main.temp_min)}°/${kToF(city.main.temp_max)}°`;
  }
}

function kToF(temp: number): number {
  const number = (temp - 273.15) * 9/5 + 32;
  return round(number);
}

function kToC(temp: number): number {
  const number = temp - 273.15;
  return round(number);
}

function round(number: number): number {
  return Number(Math.round(Number(number + "e+0")) + "e+0");
}

function createIconText(city: City):string {
  return  `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`
}
