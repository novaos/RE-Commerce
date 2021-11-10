import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
// import styles from './HookForm.module.scss';


const BasicFormHook = () => {
    const { t } = useTranslation();

    const validationSchema = Yup.object({
        fullName: Yup.string().required(t('GLOBAL.VALIDATION.required')),
        email: Yup.string().email(t('GLOBAL.VALIDATION.incorrectEmail')).required(t('GLOBAL.VALIDATION.required')),
        password: Yup.string().required(t('GLOBAL.VALIDATION.required')).min(8, 'Minimum 8 characters'),
        confirm_password: Yup.string().oneOf([Yup.ref('password')], 'Password is not match!').required(t('GLOBAL.VALIDATION.required')),
        agreeWithTermsAndConditions: Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions')
    });

    const { register, handleSubmit, formState, formState: {errors}, reset } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        console.log(data)
        reset()
    };

    return ( 
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className='container'>
                <div className="field">
                  <label className="label" htmlFor="fullName">
                    Full name
                  </label>
                  <div className="control">
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Full name" 
                        { ...register('fullName') } />
                    <span className='help is-danger'>{errors.fullName?.message}</span>
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="email">
                    Email address
                  </label>
                  <div className="control">
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Email address" 
                        { ...register('email') } />
                    <span className='help is-danger'>{errors.email?.message}</span>
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <div className="control">
                    <input 
                        type="text"
                        className="input" 
                        placeholder="Password" 
                        { ...register('password') } />
                    <span className='help is-danger'>{errors.password?.message}</span>
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="password">
                    Confirm Password
                  </label>
                  <div className="control">
                    <input 
                        name="confirm_password" 
                        type="text" 
                        className="input" 
                        placeholder="Password"
                        { ...register('confirm_password') }/>
                    <span className='help is-danger'>{errors.confirm_password?.message}</span>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="checkbox" htmlFor="agreeWithTermsAndConditions">
                      <input 
                        type="checkbox" 
                        className="mr-2 checkbox" 
                        { ...register('agreeWithTermsAndConditions') } />I agree to
                      the terms and conditions
                    </label>
                    <span className='help is-danger'>{errors.agreeWithTermsAndConditions?.message}</span>
                  </div>
                </div>
                
                <button type="submit" className="button is-primary" disabled={!formState.isValid} >
                  Submit
                </button>
            </div>
        </form>
    );
}

export default BasicFormHook;
