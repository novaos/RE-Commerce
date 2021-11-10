import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { CountryDropdown } from 'react-country-region-selector';
import DatePicker from 'react-datepicker';

const CustomValidationForm = () => {
  const { t } = useTranslation();
  const [country, setCountry] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const companyEmailRegExp =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(?!gmail|googlemail|msn|aol|yahoo|live|inbox)(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i; // eslint-disable-line

  const products = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
  const productOptions = products.map((product, key) => (
    <option value={product} key={key}>
      {product}
    </option>
  ));

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required(t('GLOBAL.VALIDATION.required'))
      .min(2, 'Mininum 2 characters')
      .max(15, 'Maximum 15 characters'),
    product: Yup.string().required('Please select a product').oneOf(products),
    country: Yup.string().required(t('GLOBAL.VALIDATION.required')),
    email: Yup.string().matches(companyEmailRegExp, 'Must be company email').required(t('GLOBAL.VALIDATION.required')),
    startDate: Yup.string().required(t('GLOBAL.VALIDATION.required')),
    comment: Yup.string()
      .when('startDate', {
        is: startDate => new Date(startDate) >= new Date(),
        then: Yup.string().required(t('GLOBAL.VALIDATION.required')),
        otherwise: Yup.string()
      })
      .min(2, 'Mininum 2 characters'),
    age: Yup.string(),
    meat: Yup.array().min(1, 'At least one meat must be selected')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="field">
          <label className="label" htmlFor="fullName">
            Full name
          </label>
          <div className="control">
            <input type="text" className="input" placeholder="Full name" {...register('fullName')} />
            <span className="help is-danger">{errors.fullName?.message}</span>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="product">
            Product
          </label>
          <div className="control">
            <div className="select is-fullwidth">
              <select name="product" {...register('product')}>
                <option value={''}>Select a product</option>
                {productOptions}
              </select>
            </div>
            <span className="help is-danger">{errors.product?.message}</span>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="country">
            Country
          </label>
          <div className="control">
            <div className="select is-fullwidth">
              <CountryDropdown
                value={country}
                onChange={value => {
                  register('country', { value });
                  setCountry(value);
                }}
              />
            </div>
            <span className="help is-danger">{errors.country?.message}</span>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="email">
            Company Email
          </label>
          <div className="control">
            <input type="text" className="input" placeholder="Email address" {...register('email')} />
            <span className="help is-danger">{errors.email?.message}</span>
          </div>
        </div>

        <div className="columns">
          <div className="column is-6">
            <div className="field">
              <label className="label" htmlFor="fullName">
                Start month
              </label>
              <div className="control">
                <DatePicker
                  className="input is-fullwidth"
                  name="startDate"
                  selected={startDate}
                  onChange={startDate => {
                    register('startDate', { value: startDate });
                    setStartDate(startDate);
                  }}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                />
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div>
              <label className="label" htmlFor="comment">
                Some comment
              </label>
              <div className="control">
                <input type="text" className="input" placeholder="Comment" {...register('comment')} />
                <span className="help is-danger">{errors.comment?.message}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <div role="group" aria-labelledby="radio-group">
              <label className="label">How old are you?</label>

              <div className="control columns">
                <label className="column radio label">
                  <input className="mr-2" type="radio" value="0-20" {...register('age')} />
                  0-20
                </label>
                <label className="column radio label">
                  <input className="mr-2" type="radio" value="20-40" {...register('age')} />
                  20-40
                </label>
                <label className="column radio label">
                  <input className="mr-2" type="radio" value="40-60" {...register('age')} />
                  40-60
                </label>
                <label className="column radio label">
                  <input className="mr-2" type="radio" value="60-80" {...register('age')} />
                  60-80
                </label>
                <label className="column radio label">
                  <input className="mr-2" type="radio" value="80-100" {...register('age')} />
                  80-100
                </label>
              </div>
            </div>
          </div>
          <span className="help is-danger">{errors.age?.message}</span>
        </div>

        <div className="field">
          <div className="control">
            <div role="group" aria-labelledby="checkbox-group">
              <label className="label">What is your favorite meat?</label>

              <div className="control columns">
                <label className="column checkbox label">
                  <input className="mr-2" type="checkbox" value="pork" {...register('meat')} />
                  Pork
                </label>
                <label className="column checkbox label">
                  <input className="mr-2" type="checkbox" value="beef" {...register('meat')} />
                  Beef
                </label>
                <label className="column checkbox label">
                  <input className="mr-2" type="checkbox" value="chicken" {...register('meat')} />
                  Chicken
                </label>
              </div>
            </div>
          </div>
          <span className="help is-danger">{errors.meat?.message}</span>
        </div>

        <button type="submit" className="button is-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CustomValidationForm;
