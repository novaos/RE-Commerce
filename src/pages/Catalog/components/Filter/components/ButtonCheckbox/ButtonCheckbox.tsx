import { Checkbox } from 'antd';
import * as React from 'react';
import './buttonCheckbox.scss';

type ButtonCheckboxProps = {
  items?: {
    title: string;
    options?: {
      label: string;
      value: string;
    }[];
  }[];
  values?: string[];
  name: string;
  setFieldValue: (name: string, values: any) => void;
  onChange: (name: string, setFieldValue: (name: string, values: any) => void, values: any) => void;
  handleSubmit?: () => void;
  styles?: {
    [key: string]: string;
  };
};

const ButtonCheckbox: React.FC<ButtonCheckboxProps> = ({
  name,
  items,
  onChange,
  handleSubmit,
  setFieldValue,
  styles,
  values
}) => {
  return (
    <section className="button-checkbox-wrapper">
      {items?.map(({ title, options }) => (
        <React.Fragment key={title}>
          <h4 className="title">{title}</h4>
          <Checkbox.Group
            defaultValue={values ?? []}
            onChange={values => {
              onChange(name, setFieldValue, values);
              handleSubmit && handleSubmit();
            }}
            className="custom-checkboxes">
            {options?.map(({ value, label }) => (
              <Checkbox key={value} style={{ ...styles }} className="label" value={value}>
                {label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </React.Fragment>
      ))}
    </section>
  );
};

export { ButtonCheckbox };
