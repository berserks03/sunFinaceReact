import React, { FC, useEffect, useState } from 'react'
import { CitiesResponse, City } from 'types/types'
import './CitiesSearch.scss'
import CitiesModel from 'models/CitiesModel'
import Modal from 'components/CitiesModal/CitiesModal'
import Dropdown from 'components/CitiesDropdown/CitiesDropdown'
import Toggle from 'components/Toggle/Toggle'

const CitiesSearch: FC = () => {
  const [userInput, setUserInput] = useState<string>("")
  const [dropdown, setDropdown] = useState<boolean>(false)
  const [cities, setCities] = useState<City[]>([])
  const [city, setCity] = useState<City | null>(null)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [units, setUnits] = useState<boolean>(true)
  const [dayNight, setDayNight] = useState<boolean>(true)

  const fetchCities = () => {
    const urlbBeginig = "https://openweathermap.org/data/2.5/find?q=";
      const urlEnd = "&appid=439d4b804bc8187953eb36d2a8c26a02&units=" + whichUnits;
      const url = urlbBeginig
                  + userInput
                  + urlEnd;
      
      if (isEnoughLongInput()) {
        fetch(url, {method: "GET", mode: 'cors'})
          .then(res => res.json())
          .then((data: CitiesResponse) => setCities(CitiesModel.createFromCollection(data.list)))
          .catch(err => console.log('Fetch Error :-S', err));
      }
  }

  const inputHandler = (city: City) => {
    setCity(city);
    setUserInput(city.name);
    setDropdown(false);
    setShowModal(true);
  }

  const unitsHandler = (val: boolean) => {
    setUnits(val);
  }

  const dayNightHandler = (val: boolean) => {
    setDayNight(val);
  }

  const showDropdown = () => {
    return isCitiesNotEmpty() && dropdown && isEnoughLongInput();
  }

  const isCitiesNotEmpty = () => {
    return cities.length > 0;
  }

  const isEnoughLongInput = () => {
    return userInput.length > 2;
  }

  const whichUnits = () => {
    return units ? 'metric' : 'imperial';
  }

  useEffect(() => {
    fetchCities();
  }, [userInput])

  return (
    <div className="city container">
      <div className={`city__background ${!dayNight ? 'city__background--night' : ''}`} onClick={() => setDropdown(false)}></div>

      <div className="city__inputContainer">
        <input
          type="text"
          className="city__input"
          autoComplete="off"
          placeholder="Type here city name"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          onFocus={() => setDropdown(true)}
        />

        <Toggle
          enabled="C"
          disabled="F"
          defaultVal={units}
          valHandler={unitsHandler}
        />
      </div>

      {showDropdown() &&
        <Dropdown
          cities={cities}
          onCityClick={inputHandler}
        />
      }
      
      {(showModal && city !== null) &&
        <Modal
          city={city}
          units={units}
          onCloseModal={() => setShowModal(false)}
        />
      }

      <Toggle
          enabled="D"
          disabled="N"
          defaultVal={units}
          valHandler={dayNightHandler}
          classname="city__dayNight"
        />

    </div>
  )
}

export default CitiesSearch
