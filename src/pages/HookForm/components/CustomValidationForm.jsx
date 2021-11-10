// import { useTranslation } from 'react-i18next';
// import * as Yup from 'yup';
// import { ICustomValidationFormValues } from '../interfaces';
// import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
// import { CountryDropdown } from 'react-country-region-selector';

// import { DisplayFormikState } from '../../../utils/displayFormikState';
// import Error from './Error';
// import DatePicker from 'react-datepicker';
// import classNames from 'classnames';

// const CustomValidationForm = () => {
//   const { t } = useTranslation();

//   const companyEmailRegExp =
//     /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(?!gmail|googlemail|msn|aol|yahoo|live|inbox)(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i; // eslint-disable-line
//   const products = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
//   const productOptions = products.map((product, key) => (
//     <option value={product} key={key}>
//       {product}
//     </option>
//   ));

//   const validationSchema = Yup.object({
//     fullName: Yup.string()
//       .min(2, 'Mininum 2 characters')
//       .max(15, 'Maximum 15 characters')
//       .required(t('GLOBAL.VALIDATION.required')),
//     product: Yup.string().required('Please select a product').oneOf(products),
//     country: Yup.string().required(t('GLOBAL.VALIDATION.required')),
//     email: Yup.string().matches(companyEmailRegExp, 'Must be company email').required(t('GLOBAL.VALIDATION.required')),
//     startDate: Yup.string().required(t('GLOBAL.VALIDATION.required')),
//     comment: Yup.string()
//       .when('startDate', {
//         is: (startDate: Date) => new Date(startDate) >= new Date(),
//         then: Yup.string().required(t('GLOBAL.VALIDATION.required')),
//         otherwise: Yup.string()
//       })
//       .min(2, 'Mininum 2 characters'),
//     age: Yup.number(),
//     meat: Yup.array().min(1, 'At least one meat must be selected')
//   });

//   const initialValues = {
//     fullName: '',
//     product: '',
//     country: '',
//     email: '',
//     startDate: '',
//     comment: '',
//     age: '',
//     meat: ''
//   };

//   const onSubmit = (values: ICustomValidationFormValues) => {
//     console.log(values);
//   };

//   return (
//     <>
//       <h4 className="title is-4">Custom Validation</h4>

//       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//         {(props: FormikProps<ICustomValidationFormValues>) => {
//           const { values, dirty, isValid, status, setStatus, handleChange, handleBlur, setFieldValue } = props;

//           return (
//             <Form>
//               <div className="container">
//                 <div className="field">
//                   <label className="label" htmlFor="fullName">
//                     Full name
//                   </label>
//                   <div className="control">
//                     <Field name="fullName" type="text" className="input" placeholder="Full name" />
//                     <ErrorMessage name="fullName" render={Error} />
//                   </div>
//                 </div>

//                 <div className="field">
//                   <label className="label" htmlFor="product">
//                     Product
//                   </label>
//                   <div className="control">
//                     <div className="select is-fullwidth">
//                       <Field name="product" as="select">
//                         <option value={''}>Select a product</option>
//                         {productOptions}
//                       </Field>
//                     </div>
//                     <ErrorMessage name="product" render={Error} />
//                   </div>
//                 </div>

//                 <div className="field">
//                   <label className="label" htmlFor="country">
//                     Country
//                   </label>
//                   <div className="control">
//                     <div className="select is-fullwidth">
//                       <CountryDropdown
//                         name="country"
//                         value={values.country}
//                         onChange={(country: string, e: React.ChangeEvent<Element>) => {
//                           handleChange(e);
//                           setStatus({ ...status, country });
//                         }}
//                         onBlur={handleBlur}
//                       />
//                     </div>
//                     <ErrorMessage name="country" render={Error} />
//                   </div>
//                 </div>

//                 <div className="field">
//                   <label className="label" htmlFor="email">
//                     Company Email
//                   </label>
//                   <div className="control">
//                     <Field name="email" type="text" className="input" placeholder="Email address" />
//                     <ErrorMessage name="email" render={Error} />
//                   </div>
//                 </div>

//                 <div className="columns">
//                   <div className="column is-6">
//                     <div className="field">
//                       <label className="label" htmlFor="fullName">
//                         Start month
//                       </label>
//                       <div className="control">
//                         <DatePicker
//                           className="input is-fullwidth"
//                           name="startDate"
//                           selected={new Date()}
//                           onChange={(startDate: Date, e: React.ChangeEvent<Element>) => {
//                             handleChange(e);
//                             setStatus({ ...status, startDate });
//                             setFieldValue('startDate', startDate);
//                           }}
//                           dateFormat="MM/yyyy"
//                           showMonthYearPicker
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="column is-6">
//                     <div className={classNames('field', status && status.startDate >= new Date() ? '' : 'is-hidden')}>
//                       <label className="label" htmlFor="comment">
//                         Some comment
//                       </label>
//                       <div className="control">
//                         <Field name="comment" type="text" className="input" placeholder="Comment" />
//                         <ErrorMessage name="comment" render={Error} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="field">
//                   <div className="control">
//                     <div role="group" aria-labelledby="radio-group">
//                       <label className="label">How old are you?</label>

//                       <div className="control columns">
//                         <label className="column radio label">
//                           <Field className="mr-2" name="age" type="radio" value="0-20" />
//                           0-20
//                         </label>
//                         <label className="column radio label">
//                           <Field className="mr-2" name="age" type="radio" value="20-40" />
//                           20-40
//                         </label>
//                         <label className="column radio label">
//                           <Field className="mr-2" name="age" type="radio" value="40-60" />
//                           40-60
//                         </label>
//                         <label className="column radio label">
//                           <Field className="mr-2" name="age" type="radio" value="60-80" />
//                           60-80
//                         </label>
//                         <label className="column radio label">
//                           <Field className="mr-2" name="age" type="radio" value="80-100" />
//                           80-100
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <ErrorMessage name="age" render={Error} />
//                 </div>

//                 <div className="field">
//                   <div className="control">
//                     <div role="group" aria-labelledby="checkbox-group">
//                       <label className="label">What is your favorite meat?</label>

//                       <div className="control columns">
//                         <label className="column checkbox label">
//                           <Field className="mr-2" name="meat" type="checkbox" value="pork" />
//                           Pork
//                         </label>
//                         <label className="column checkbox label">
//                           <Field className="mr-2" name="meat" type="checkbox" value="beef" />
//                           Beef
//                         </label>
//                         <label className="column checkbox label">
//                           <Field className="mr-2" name="meat" type="checkbox" value="chicken" />
//                           Chicken
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <ErrorMessage name="meat" render={Error} />
//                 </div>

//                 <button type="submit" className="button is-primary" disabled={!(isValid && dirty)}>
//                   Submit
//                 </button>
//               </div>

//               <DisplayFormikState {...values} />
//             </Form>
//           );
//         }}
//       </Formik>
//     </>
//   );
// };

// export default CustomValidationForm;
