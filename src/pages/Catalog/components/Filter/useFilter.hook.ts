import { useMemo, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import { FormInputType } from './Filter.types';

const useFilterData = () => {
  const { state } = useContext(GlobalContext);
  const [inputRangeValue, setInputRangeValue] = useState({
    min: 0,
    max: 1500
  });
  useEffect(() => {
    if (state.dataForFilter) {
      const minPrice = Number(state.dataForFilter?.price?.[0]);
      const maxPrice = Number(state.dataForFilter?.price?.[1]);
      setInputRangeValue({ min: minPrice, max: maxPrice });
    }
  }, [state?.dataForFilter]);

  const categories = useMemo(
    () => [
      {
        title: 'Categories',
        type: FormInputType.radio,
        options: state.dataForFilter?.category.map(item => ({
          label: item,
          value: item
        }))
      }
    ],
    [state.dataForFilter?.category]
  );

  const sizes = useMemo(
    () => [
      {
        title: 'Size',
        options: state.dataForFilter?.size.map(item => ({
          label: item,
          value: item
        }))
      }
    ],
    [state.dataForFilter?.size]
  );

  const colors = useMemo(
    () => [
      {
        title: 'Colors',
        type: FormInputType.checkbox,
        options: state.dataForFilter?.color.map(item => ({
          label: item,
          value: item
        }))
      }
    ],
    [state.dataForFilter?.color]
  );

  const onChangeCheckbox = (name: string, setFieldValue: (name: string, values: any) => void, values: any) => {
    setFieldValue(name, values);
  };

  const onChangeRadio = (name: string, setFieldValue: (name: string, values: any) => void, values: any) => {
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
    category: [],
    price: state.dataForFilter ? [+state.dataForFilter?.price?.[0], +state.dataForFilter?.price?.[1]] : [0, 0],
    size: [],
    color: []
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
    categories,
    radioRange: state.dataForFilter?.price,
    onChangeRadio
  };
};

export { useFilterData };
