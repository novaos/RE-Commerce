import { Checkbox } from 'antd';
import * as React from 'react';
import './buttonCheckbox.scss';

const ButtonCheckbox: React.FC<{
  items?: {
    title: string;
    options?: {
      label: string;
      value: string;
    }[];
  }[];
  name: string;
  setFieldValue: (name: string, values: any) => void;
  onChange: (name: string, setFieldValue: (name: string, values: any) => void, values: any) => void;
  handleSubmit?: () => void;
}> = ({ name, items, onChange, handleSubmit, setFieldValue }) => {
  return (
    <section className="button-checkbox-wrapper">
      {items?.map(({ title, options }) => (
        <>
          <h4 className="title">{title}</h4>
          <Checkbox.Group
            onChange={values => {
              onChange(name, setFieldValue, values);
              handleSubmit && handleSubmit();
            }}
            className="custom-checkboxes">
            {options?.map(({ value, label }) => (
              <Checkbox className="label" value={value}>
                {label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </>
      ))}
    </section>
  );
};

export { ButtonCheckbox };
