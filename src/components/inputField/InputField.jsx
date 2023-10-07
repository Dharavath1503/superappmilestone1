import React from 'react'

import './style.scss';

const InputField = (props) => {

  // console.log("props.value: ", props.value);
  // console.log("props.minLength: ", props.minLength);


  
  return (
    <div className="input-field">
      <input 
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {
        props.error && props.value.length <= props.minLength ? <p className='error-text'>{props.errorText}</p> : ""
      }
      
    </div>
  )
}

export default InputField