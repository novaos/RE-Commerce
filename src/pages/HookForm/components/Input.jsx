import React from 'react';
import Error from './Error';

function Input(props) {
  const { name, label, type, inputClass, register, errors, ...rest } = props;

  return (
    <div className="field">
      <label className="label" htmlFor={name}>{label}</label>
      <div className="control">
        <input name={name} type={type} className={`input ${inputClass}`} placeholder={label} {...register(name)} {...rest}  />
        <Error message={errors[name]?.message} />
      </div>
    </div>
  )
}

export default Input;