import { UseFormHandleSubmit, UseFormRegister, FieldValues } from 'react-hook-form';

interface Props {
  disabled: boolean,
  handleSubmit: UseFormHandleSubmit<React.FormEvent>,
  onSubmit: () => void,
  register: UseFormRegister<FieldValues>,
  errors: {email?: {message: string}, password?: {message: string}}
}
  
const Form: React.FC<Props> = ({handleSubmit, register, disabled, onSubmit, errors}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field my-5">
          <label className="label" htmlFor="email">
            Email address
          </label>
          <div className="control">
            <input type="text" className={`input ${errors.email?.message ? 'is-danger' : 'is-primary'}`} placeholder="Email address" {...register('email')}  />
          </div>
          <span className='help is-danger'>{errors.email?.message}</span>
      </div>

      <div className="field my-5">
          <label className="label" htmlFor="password">
            Password
          </label>
          <div className="control">
            <input type="text" className={`input ${errors.email?.message ? 'is-danger' : 'is-primary'}`} placeholder="Password" {...register('password')} />
          </div>
          <span className='help is-danger'>{errors.password?.message}</span>
      </div>

      <button type="submit" className={`button is-primary is-fullwidth mt-6 ${disabled ? 'is-loading' : null}`} disabled={disabled} >
        Submit
      </button>
  </form>
  )
}

export default Form;