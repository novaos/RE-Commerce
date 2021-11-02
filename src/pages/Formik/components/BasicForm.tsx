import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import * as Yup from 'yup';
import { IFormValues } from '../interfaces';

const BasicForm = () => {
  const validationSchema: any = Yup.object({
    fullName: Yup.string().required(),
    email: Yup.string().email().required()
  });

  const initialValues = {
    fullName: '',
    email: ''
  };

  const onSubmit = (values: IFormValues) => {
    console.log(values);
  };

  const renderError = (message: string) => <p className="help is-danger">{message}</p>;

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(props: FormikProps<IFormValues>) => {
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
                    <ErrorMessage name="fullName" render={renderError} />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="email">
                    Email address
                  </label>
                  <div className="control">
                    <Field name="email" type="text" className="input" placeholder="Email address" />
                    <ErrorMessage name="email" render={renderError} />
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
