import { useContext, useState } from 'react';
import { GlobalContext } from '../../utils/providers/GlobalContext';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Form from './Form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Login: React.FC = () => {
  const [disabled, setDisabled] = useState(false)
  const {dispatch} = useContext(GlobalContext);
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    email: Yup.string().required(t('GLOBAL.VALIDATION.required')),
    password: Yup.string().required(t('GLOBAL.VALIDATION.required'))
  });

  const {handleSubmit, register, formState: {errors}} = useForm({
    resolver: yupResolver(validationSchema)
  });
  
  const onSubmit = async () => {
    setDisabled(true);

    const randomUser = Math.round(Math.random() * (10 - 1) + 1);
    const user = await fetch(`https://fakestoreapi.com/users/${randomUser}`)
      .then(res => res.json());

    dispatch({type: 'SET_LOGIN', payload: true});
    dispatch({type: 'SET_USER', payload: user});
  }

  return(
    <div className='columns mt-6 is-centered'>
      <div className="box column is-5 p-6">
        <h1 className='title is-3'>Log In</h1>
          <Form handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} disabled={disabled} errors={errors} />
      </div>
    </div>
  )
}

export default Login;