import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormController from './FormController';
import { IReuseableFormValues } from '../interfaces/reusable-form';

const ReusableForm = () => {
    const { t } = useTranslation();

    const validationSchema = Yup.object({
        fullName: Yup.string().required(t('GLOBAL.VALIDATION.required')),
        email: Yup.string().email(t('GLOBAL.VALIDATION.incorrectEmail')).required(t('GLOBAL.VALIDATION.required'))
    });

    const { register, handleSubmit, formState, formState: {errors}, reset } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onChange'
    }); 

    const onSubmit = (data: IReuseableFormValues) => {
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <FormController control='input' name='fullName' label='Full name' type='text' register={register} errors={errors} />
                <FormController control='input' name='email' label='Email address' type='text' register={register} errors={errors} />

                <button type="submit" className="button is-primary" disabled={!formState.isValid} >Submit</button>
            </div>
        </form>
    );
};

export default ReusableForm;
