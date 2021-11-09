import { Formik, Form, FormikProps } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { IReusableFormValues } from '../interfaces';
import { DisplayFormikState } from '../../../utils/displayFormikState';
import FormikController from './FormikController';

const ReusableForm = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    fullName: Yup.string().required(t('GLOBAL.VALIDATION.required')),
    email: Yup.string().email(t('GLOBAL.VALIDATION.incorrectEmail')).required(t('GLOBAL.VALIDATION.required'))
  });

  const initialValues = {
    fullName: '',
    email: ''
  };

  const onSubmit = (values: IReusableFormValues) => {
    console.log(values);
  };

  return (
    <>
      <h4 className="title is-4">Reusable form</h4>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(props: FormikProps<IReusableFormValues>) => {
          const { dirty, isValid, values } = props;

          return (
            <Form>
              <div className="container">
                <FormikController control="input" type="text" label="Full name" name="fullName" inputClass="test" />
                <FormikController control="input" type="email" label="Email address" name="email" />

                <button type="submit" className="button is-primary" disabled={!(isValid && dirty)}>
                  Submit
                </button>
              </div>

              <DisplayFormikState {...values} />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ReusableForm;
