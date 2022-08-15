import React, { FC, useState } from 'react'
import './Toggle.scss'

interface ToggleProps {
  defaultVal: boolean;
  enabled: string;
  disabled: string;
  valHandler:(checkbox: boolean) => void;
  classname?: string;
}

const Toggle: FC<ToggleProps> = ({defaultVal, enabled, disabled, valHandler, classname=''}) => {
  const [checkbox, setCheckbox] = useState(defaultVal)

  const toggleCheckbox = () => {
    setCheckbox(!checkbox);
    valHandler(!checkbox)

  }

  return (
    <label className={`switch ${classname}`}>
    <input type="checkbox" onClick={toggleCheckbox} className="switch__input" />
    <div className="switch__slider switch__slider--round">
      {checkbox && <span className="switch__active">{enabled}</span>}
      {!checkbox && <span className="switch__inactive">{disabled}</span>}
    </div>
  </label>
  )
}

export default Toggle
