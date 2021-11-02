import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { ICustomValidationFormValues } from '../interfaces';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import Error from './Error';

const CustomValidationForm = () => {
  const { t } = useTranslation();

  const products = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
  const productOptions = products.map((product, key) => (
    <option value={product} key={key}>
      {product}
    </option>
  ));

  const validationSchema: any = Yup.object({
    fullName: Yup.string()
      .min(2, 'Mininum 2 characters')
      .max(15, 'Maximum 15 characters')
      .required(t('Formik.required')),
    product: Yup.string().required('Please select a product').oneOf(products),
    agreeWithTermsAndConditions: Yup.boolean().default(false)
  });

  const initialValues = {
    fullName: '',
    product: '',
    agreeWithTermsAndConditions: false
  };

  const onSubmit = (values: ICustomValidationFormValues) => {
    console.log(values);
  };

  return (
    <>
      <h4 className="title is-4">Custom Validation</h4>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(props: FormikProps<ICustomValidationFormValues>) => {
          const { dirty, isValid } = props;

          return (
            <Form>
              <div className="container">
                {/* text control */}
                <div className="field">
                  <label className="label" htmlFor="fullName">
                    Full name
                  </label>
                  <div className="control">
                    <Field name="fullName" type="text" className="input" placeholder="Full name" />
                    <ErrorMessage name="fullName" render={Error} />
                  </div>
                </div>

                {/* Dropdown */}
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

                {/* checkbox */}
                <div className="field">
                  <div className="control">
                    <label className="checkbox" htmlFor="agreeWithTermsAndConditions">
                      <Field name="agreeWithTermsAndConditions" type="checkbox" className="mr-2 checkbox" />I agree to
                      the terms and conditions
                    </label>
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
