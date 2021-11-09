import React from 'react';
import { Field, ErrorMessage } from 'formik';
import Error from './Error';
import classNames from 'classnames';

type Props = {
  name: string;
  label: string;
  type: 'text' | 'email';
  inputClass?: string;
};

const Input: React.FC<Props> = (props: Props) => {
  const { name, label, type, inputClass, ...rest } = props;

  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className="control">
        <Field name={name} type={type} className={classNames('input', inputClass)} placeholder={label} {...rest} />
        <ErrorMessage name={name} render={Error} />
      </div>
    </div>
  );
};

export default Input;
