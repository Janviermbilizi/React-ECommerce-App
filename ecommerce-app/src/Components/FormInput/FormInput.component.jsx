import React from 'react'
import './FormInput.styles.scss'

const FormInput = ({handleChange, label, ...inputProps}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...inputProps}></input>
      {
        label 
        ? <label className={`${inputProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
          </label>
        :null
      }
    </div>
  )
}

export default FormInput