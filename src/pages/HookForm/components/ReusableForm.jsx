import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const ReusableForm = (props) => {
    const { t } = useTranslation();

    const validationSchema = Yup.object({
        fullName: Yup.string().required(t('GLOBAL.VALIDATION.required')),
        email: Yup.string().email(t('GLOBAL.VALIDATION.incorrectEmail')).required(t('GLOBAL.VALIDATION.required'))
    });

    const { register, handleSubmit, formState, formState: {errors}, reset } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onChange',
        reValidateMode: 'onChange'
    }); 

    const onSubmit = data => {
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <div className="field">
                    <label className="label" htmlFor="fullName">Full name</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Full name" {...register('fullName')} />
                        <span className="help is-danger">{errors.fullName?.message}</span>
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="email">Email address</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Email address" {...register('email')} />
                        <span className="help is-danger">{errors.email?.message}</span>
                    </div>
                </div>

                <button type="submit" className="button is-primary" disabled={!formState.isValid}>Submit</button>
            </div>
        </form>
    );
};

export default ReusableForm;
