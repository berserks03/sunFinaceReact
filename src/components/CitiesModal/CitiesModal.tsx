import React, { FC } from 'react'
import { City } from 'types/types';
import './CitiesModal.scss'

interface CitiesModalProps {
  city: City;
  units: boolean;
  onCloseModal: () => void;
}

const CitiesModal: FC<CitiesModalProps> = ({city, units, onCloseModal}) => {
  return (
    <div className="city__modalContainer" onClick={onCloseModal}>
      <div className="city__modal">
        <div className="city__name">
          {city.dropdownText} <img src={city.flagText} alt='flag'/>
        </div>
        <div className="city__weatherIcon">
          <img src={city.iconText} alt='weatherIcon'/>
        </div>
        <div className="city__day">
          {new Date().toLocaleDateString("LV", {weekday: 'long'})}
        </div>
        <div className="city__temp">
          {
            units ? (
              <div>
                {city.tempC}
              </div>
            ) : (
              <div>
                {city.tempF}
              </div>
            )
          }          
        </div>
        <div className="city__minMax">
          {
            units ? (
              <div>
                {city.minMaxTextC}
              </div>
            ) : (
              <div>
                {city.minMaxTextF}
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CitiesModal
