import { useMemo, useState } from 'react';
import { FormInputType } from './Filter.types';

const useFilterData = () => {
  const [inputRangeValue, setInputRangeValue] = useState({
    min: 0,
    max: 1500
  });

  const categories = useMemo(
    () => [
      {
        title: 'Categories',
        type: FormInputType.checkbox,
        options: [
          {
            value: 'accessories',
            label: 'Accessories',
            count: 15
          },
          {
            value: 'dresses',
            label: 'Dresses',
            count: 15
          },
          {
            value: 'women',
            label: 'Women',
            count: 15
          },
          {
            value: 'men',
            label: 'Men',
            count: 15
          },
          {
            value: 'watch',
            label: 'Watch',
            count: 15
          },
          {
            value: 'clothing',
            label: 'Clothing',
            count: 15
          },

          {
            value: 'bags',
            label: 'Bags',
            count: 15
          }
        ]
      }
    ],
    []
  );

  const sizes = useMemo(
    () => [
      {
        title: 'Size',
        options: [
          {
            value: 'xs',
            label: 'XS'
          },
          {
            value: 's',
            label: 'S'
          },
          {
            value: 'm',
            label: 'M'
          },
          {
            value: 'l',
            label: 'L'
          },
          {
            value: 'sl',
            label: 'SL'
          },
          {
            value: 'xl',
            label: 'XL'
          },
          {
            value: 'xxl',
            label: 'XXL'
          }
        ]
      }
    ],
    []
  );

  const colors = useMemo(
    () => [
      {
        title: 'Colors',
        options: [
          {
            label: 'Black',
            value: 'black'
          },
          {
            label: 'White',
            value: 'white'
          },
          {
            label: 'Blue',
            value: 'blue'
          },
          {
            label: 'Yellow',
            value: 'yellow'
          },
          {
            label: 'Orange',
            value: 'orange'
          }
        ]
      }
    ],
    []
  );

  const onChangeCheckbox = (name: string, setFieldValue: (name: string, values: any) => void, values: any) => {
    setFieldValue(name, values);
  };

  const handleMinRangeChange = (setFieldValue: (name: string, value: number[]) => void, value: number) => {
    setInputRangeValue({
      ...inputRangeValue,
      min: value
    });
    setFieldValue('price', [value, inputRangeValue.max]);
  };

  const handleMaxRangeChange = (setFieldValue: (name: string, value: number[]) => void, value: number) => {
    setInputRangeValue({
      ...inputRangeValue,
      max: value
    });

    setFieldValue('price', [inputRangeValue.min, value]);
  };

  const handleBothRangeChange = (setFieldValue: (name: string, values: number[]) => void, values: number[]) => {
    setInputRangeValue({
      min: values[0],
      max: values[1]
    });
    setFieldValue('price', values);
  };
  const initialValues = {
    categories: [],
    price: [],
    size: [],
    colors: []
  };

  return {
    onChangeCheckbox,
    handleMinRangeChange,
    handleMaxRangeChange,
    handleBothRangeChange,
    initialValues,
    inputRangeValue,
    colors,
    sizes,
    categories
  };
};

export { useFilterData };
