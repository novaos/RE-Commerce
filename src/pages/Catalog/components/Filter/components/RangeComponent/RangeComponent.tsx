import { SearchOutlined } from '@ant-design/icons';
import { Typography, Slider, InputNumber, Tooltip, Button } from 'antd';
import * as React from 'react';
import './rangeComponent.scss';

const RangeComponent: React.FC<{
  title: string;
  inputRangeValue: {
    min: number;
    max: number;
  };
  radioRange?: string[] | number[];
  handleBothValueChange: (setFieldValue: (name: string, values: any) => void, values: any) => void;
  handleMinValueChange: (setFieldValue: (name: string, values: any) => void, values: any) => void;
  handleMaxValueChange: (setFieldValue: (name: string, values: any) => void, values: any) => void;
  setFieldValue: (name: string, values: any) => void;
  handleSubmit?: () => void;
  values: any;
}> = ({
  title,
  inputRangeValue,
  handleMinValueChange,
  handleMaxValueChange,
  radioRange,
  handleBothValueChange,
  handleSubmit,
  setFieldValue,
  values
}) => {
  return (
    <div className="range">
      <Typography.Title level={4} className="title">
        {title}
      </Typography.Title>
      <Slider
        value={[inputRangeValue.min, inputRangeValue.max]}
        range={{ draggableTrack: true }}
        defaultValue={radioRange ? [+radioRange?.[0], +radioRange?.[1]] : [0, 0]}
        min={radioRange && Number(radioRange[0])}
        max={radioRange && Number(radioRange[1])}
        onChange={(values: number[]) => {
          handleBothValueChange(setFieldValue, values);
          handleSubmit && handleSubmit();
        }}
      />
      <InputNumber
        min={values?.price?.[0]}
        max={inputRangeValue.max}
        style={{ margin: '0 16px' }}
        value={inputRangeValue.min}
        onChange={(value: number) => {
          handleMinValueChange(setFieldValue, value);
          handleSubmit && handleSubmit();
        }}
      />
      <InputNumber
        min={inputRangeValue.min}
        max={values?.price?.[1]}
        style={{ margin: '0 16px' }}
        value={inputRangeValue.max}
        onChange={(value: number) => {
          handleMaxValueChange(setFieldValue, value);
          handleSubmit && handleSubmit();
        }}
      />
      <Tooltip title="search">
        <Button
          onClick={() => {}}
          type="primary"
          style={{ backgroundColor: '#2faf6d' }}
          shape="default"
          icon={<SearchOutlined />}
        />
      </Tooltip>
    </div>
  );
};

export { RangeComponent };
