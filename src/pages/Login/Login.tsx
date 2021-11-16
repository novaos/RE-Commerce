import { useContext, useState } from 'react';
import { GlobalContext } from '../../utils/providers/GlobalContext';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
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

  const {handleSubmit, register} = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async () => {
    setDisabled(true);

    const user = await fetch('https://fakestoreapi.com/users/3')
      .then(res => res.json());

    dispatch({type: 'SET_LOGIN', payload: true});
    dispatch({type: 'SET_USER', payload: user});
  }

  return(
    <div className="columns is-centered">
        <div className="column is-half">
          <h1 className='title'>Log In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
                <label className="label" htmlFor="email">
                  Email address
                </label>
                <div className="control">
                  <input type="text" className="input" placeholder="Email address" {...register('email')}  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <div className="control">
                  <input type="text" className="input" placeholder="Password" {...register('password')} />
                </div>
              </div>

              <button type="submit" className="button is-primary" disabled={disabled} >
                Submit
              </button>

              <div className="field">
                {disabled ? 'Loading...' : null}
              </div>
          </form>
        </div>
      </div>
  )
}

export default Login;