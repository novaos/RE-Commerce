import { Checkbox, Row, Typography } from 'antd';
import * as React from 'react';
import { FormInputType } from '../../Filter.types';
import './checkbox.scss';

const CheckboxComponent: React.FC<{
  items?: {
    title: string;
    type: FormInputType;
    options?: {
      value: string;
      label: string;
    }[];
  }[];
  setFieldValue: (name: string, values: any) => void;
  name: string;
  handleSubmit?: () => void;
  onChange: (name: string, setFieldValue: (name: string, values: any) => void, values: any) => void;
}> = ({ items, setFieldValue, name, handleSubmit, onChange }) => {
  return (
    <div className="checkbox-wrapper">
      {items?.map(({ title, options }) => (
        <React.Fragment key={title}>
          <Typography.Title level={4} className="title">
            {title}
          </Typography.Title>
          <Checkbox.Group
            onChange={values => {
              onChange(name, setFieldValue, values);
              handleSubmit && handleSubmit();
            }}>
            {options?.map(({ value, label }) => (
              <Row key={value}>
                <Checkbox className="label" value={value}>
                  {label}
                </Checkbox>
              </Row>
            ))}
          </Checkbox.Group>
        </React.Fragment>
      ))}
    </div>
  );
};

export { CheckboxComponent };
