import { Radio, Row, Typography } from 'antd';
import Form from 'antd/lib/form/Form';
import { Formik } from 'formik';
import * as React from 'react';
import { ButtonCheckbox, CheckboxComponent, RangeComponent } from './components';
import './filter.scss';
import { useFilterData } from './useFilter.hook';

const Filter: React.FC<{ handleSearch: (values: any) => void }> = ({ handleSearch }) => {
  const {
    onChangeCheckbox,
    handleMinRangeChange,
    handleMaxRangeChange,
    handleBothRangeChange,
    initialValues,
    inputRangeValue,
    colors,
    sizes,
    categories,
    radioRange,
    onChangeRadio
  } = useFilterData();

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={values => handleSearch(values)}>
        {({ values, setFieldValue, handleSubmit }) => (
          <Form onFinish={handleSubmit}>
            <section className="filter-section categories">
              {categories.map(({ title, options }) => (
                <>
                  <Typography.Title level={4} className="title">
                    {title}
                  </Typography.Title>
                  <Radio.Group
                    onChange={event => {
                      onChangeRadio('category', setFieldValue, event.target.value);
                      handleSubmit();
                    }}>
                    {options?.map(({ value, label }: { value: string; label: string }) => (
                      <Row>
                        <Radio className="label" value={value}>
                          {label}
                        </Radio>
                      </Row>
                    ))}
                  </Radio.Group>
                </>
              ))}
            </section>

            <section className="filter-section">
              <RangeComponent
                title={'Price Filter'}
                inputRangeValue={inputRangeValue}
                radioRange={radioRange}
                handleBothValueChange={handleBothRangeChange}
                handleMinValueChange={handleMinRangeChange}
                handleMaxValueChange={handleMaxRangeChange}
                setFieldValue={setFieldValue}
                values={values}
                handleSubmit={handleSubmit}
              />
            </section>

            <section className="filter-section">
              <ButtonCheckbox
                items={sizes}
                name={'size'}
                setFieldValue={setFieldValue}
                onChange={onChangeCheckbox}
                handleSubmit={handleSubmit}
              />
            </section>

            <CheckboxComponent
              items={colors}
              setFieldValue={setFieldValue}
              name={'color'}
              onChange={onChangeCheckbox}
              handleSubmit={handleSubmit}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { Filter };
