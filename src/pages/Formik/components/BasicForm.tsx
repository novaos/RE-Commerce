import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { IBasicFormValues } from '../interfaces';
import Error from './Error';

const BasicForm = () => {
  const { t } = useTranslation();

  const validationSchema: any = Yup.object({
    fullName: Yup.string().required(t('Formik.required')),
    email: Yup.string().email(t('Formik.incorrectEmail')).required(t('Formik.required'))
  });

  const initialValues = {
    fullName: '',
    email: ''
  };

  const onSubmit = (values: IBasicFormValues) => {
    console.log(values);
  };

  return (
    <>
      <h4 className="title is-4">Basic form</h4>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(props: FormikProps<IBasicFormValues>) => {
          const { dirty, isValid } = props;

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
                  <label className="label" htmlFor="email">
                    Email address
                  </label>
                  <div className="control">
                    <Field name="email" type="text" className="input" placeholder="Email address" />
                    <ErrorMessage name="email" render={Error} />
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

export default BasicForm;
