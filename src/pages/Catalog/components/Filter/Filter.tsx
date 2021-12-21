import { SearchOutlined } from '@ant-design/icons';
import { Button, Checkbox, InputNumber, Row, Slider, Tooltip } from 'antd';
import Form from 'antd/lib/form/Form';
import { Formik } from 'formik';
import * as React from 'react';
import { useFilterData } from './useFilter.hook';
import './Filter.scss';

const Filter: React.FC = () => {
  const {
    onChangeCheckbox,
    handleMinRangeChange,
    handleMaxRangeChange,
    handleBothRangeChange,
    initialValues,
    inputRangeValue,
    colors,
    sizes,
    categories
  } = useFilterData();

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
        {({ values, setFieldValue, handleSubmit }) => (
          <Form onFinish={handleSubmit}>
            <section className="filter-section categories">
              {categories.map(({ title, options }) => (
                <>
                  <h4 className="title">{title}</h4>
                  <Checkbox.Group onChange={values => onChangeCheckbox('categories', setFieldValue, values)}>
                    {options.map(({ value, label, count }) => (
                      <Row>
                        <Checkbox value={value}>
                          {label}({count})
                        </Checkbox>
                      </Row>
                    ))}
                  </Checkbox.Group>
                </>
              ))}
            </section>

            <section className="filter-section">
              <div className="range">
                <h4 className="title">Price Filter</h4>
                <Slider
                  value={[inputRangeValue.min, inputRangeValue.max]}
                  range={{ draggableTrack: true }}
                  defaultValue={[0, 1000]}
                  min={0}
                  max={9999}
                  onChange={(values: number[]) => handleBothRangeChange(setFieldValue, values)}
                />
                <InputNumber
                  min={0}
                  max={inputRangeValue.max}
                  style={{ margin: '0 16px' }}
                  value={inputRangeValue.min}
                  onChange={(value: number) => handleMinRangeChange(setFieldValue, value)}
                />
                <InputNumber
                  min={inputRangeValue.min}
                  max={9999}
                  style={{ margin: '0 16px' }}
                  value={inputRangeValue.max}
                  onChange={(value: number) => handleMaxRangeChange(setFieldValue, value)}
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
            </section>

            <section className="filter-section">
              {sizes.map(({ title, options }) => (
                <>
                  <h4 className="title">{title}</h4>
                  <Checkbox.Group
                    onChange={values => onChangeCheckbox('size', setFieldValue, values)}
                    className="custom-checkboxes">
                    {options.map(({ value, label }) => (
                      <Checkbox value={value}>{label}</Checkbox>
                    ))}
                  </Checkbox.Group>
                </>
              ))}
            </section>

            <section className="filter-section colors">
              {colors.map(({ title, options }) => (
                <>
                  <h4 className="title">{title}</h4>
                  <Checkbox.Group onChange={values => onChangeCheckbox('colors', setFieldValue, values)}>
                    {options.map(({ value, label }) => (
                      <Row>
                        <Checkbox value={value}>{label}</Checkbox>
                      </Row>
                    ))}
                  </Checkbox.Group>
                </>
              ))}
            </section>
            {JSON.stringify(values)}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { Filter };
