export interface CitiesResponse {
  message: string
  cod: string
  count: number
  list: City[]
}

export interface City {
  id: number
  name: string
  coord: Coord
  main: Main
  dt: number
  wind: Wind
  sys: Sys
  rain?: Rain
  snow?: Snow
  clouds: Clouds
  weather: Weather[]
  dropdownText: string
  flagText: string
  tempC: string
  tempF: string
  minMaxTextC: string
  minMaxTextF: string
  iconText: string
}

export interface Coord {
  lat: number
  lon: number
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level?: number
  grnd_level?: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface Sys {
  country: string
}

export interface Rain {
  "1h": number
}

export interface Snow {
  "1h": number
}

export interface Clouds {
  all: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}
