import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { ICustomValidationFormValues } from '../interfaces';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import { CountryDropdown } from 'react-country-region-selector';

import Error from './Error';

const CustomValidationForm = () => {
  const { t } = useTranslation();

  const products = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
  const productOptions = products.map((product, key) => (
    <option value={product} key={key}>
      {product}
    </option>
  ));

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(2, 'Mininum 2 characters')
      .max(15, 'Maximum 15 characters')
      .required(t('Formik.required')),
    product: Yup.string().required('Please select a product').oneOf(products),
    country: Yup.string().required('Formik.required')
  });

  const initialValues = {
    fullName: '',
    product: '',
    country: ''
  };

  const onSubmit = (values: ICustomValidationFormValues) => {
    console.log(values);
  };

  return (
    <>
      <h4 className="title is-4">Custom Validation</h4>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(props: FormikProps<ICustomValidationFormValues>) => {
          const { values, dirty, isValid, status, setStatus, handleChange, handleBlur } = props;

          return (
            <Form>
              <div className="container">
                <div className="field">
                  <label className="label" htmlFor="fullName">
                    Full name
                  </label>
                  <div className="control">
                    <Field name="fullName" type="text" className="input" placeholder="Full name" />
                    <ErrorMessage name="fullName" render={Error} />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="product">
                    Product
                  </label>
                  <div className="control">
                    <div className="select is-fullwidth">
                      <Field name="product" as="select">
                        <option value={''}>Select a product</option>
                        {productOptions}
                      </Field>
                    </div>
                    <ErrorMessage name="product" render={Error} />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="country">
                    Country
                  </label>
                  <div className="control">
                    <div className="select is-fullwidth">
                      <CountryDropdown
                        name="country"
                        value={values.country}
                        onChange={(country: string, e: React.ChangeEvent<any>) => {
                          handleChange(e);
                          setStatus({ ...status, country });
                        }}
                        onBlur={handleBlur}
                      />
                    </div>
                    <ErrorMessage name="country" render={Error} />
                  </div>
                </div>

                <button type="submit" className="button is-primary" disabled={!(isValid && dirty)}>
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default CustomValidationForm;
