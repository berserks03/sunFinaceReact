import React, { FC } from 'react'
import { City } from 'types/types';
import './CitiesDropdown.scss'

interface CitiesDropdownProps {
  cities: City[];
  onCityClick: (city: City) => void;
}

const CitiesDropdown: FC<CitiesDropdownProps> = ({cities, onCityClick}) => {

  return (
    <div className="city__listContainer">
    <ul className="city__list">
      {cities.map(city => (
        <li
          className="city__listItem"
          onClick={() => onCityClick(city)}
        >
          {city.dropdownText} <img src={city.flagText} alt="flag" />
        </li>
      ))}
    </ul>
  </div>
  )
}

export default CitiesDropdown
