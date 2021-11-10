import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const Hookform = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = data => console.log(data);
    const style = {
        width: '600px',
        margin: '0 auto'
    }
    const myRef = useRef(null);


    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={style}>
                <div className="field">
                  <label className="label" htmlFor="fullName">
                    Full name
                  </label>
                  <div className="control">
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Full name" 
                        { ...register('fullName', {required: {value: true, message: 'This field is required'}, maxLength: {value: 25, message: 'Must contain up to 25 characters'}}) } />
                    {errors.fullName && <span className='help is-danger'>{errors.fullName.message}</span>}
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
                        { ...register('email', {required: {value: true, message: 'This field is required'}, pattern: {value: /^\S{3,}@\S{2,}\.\D{2,}/, message: 'Your email is not valid'}}) } />
                    {errors.email && <span className='help is-danger'>{errors.email.message}</span>}
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="password">
                    Password
                  </label>

                  <div className="control">
                    <input 
                        type="text"
                        ref={myRef} 
                        className="input" 
                        placeholder="Password" 
                        { ...register('password', {required: {value: true, message: 'This field is required'}, minLength: {value: 8, message: 'Minimum length is 8'}}) } />
                    {errors.password && <span className='help is-danger'>{errors.password.message}</span>}
                  </div>
                </div>
{console.log(myRef)}
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
                        // {...register('', {validate: () => })}
                         />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="checkbox" htmlFor="agreeWithTermsAndConditions">
                      <input 
                        type="checkbox" 
                        className="mr-2 checkbox" 
                        { ...register('agreeWithTermsAndConditions', {required: 'You have to agree with the terms and conditions!'}) } />I agree to
                      the terms and conditions
                    </label>
                    {errors.agreeWithTermsAndConditions && <span className='help is-danger'>{errors.agreeWithTermsAndConditions.message}</span>}
                  </div>
                </div>
                
                <button type="submit" className="button is-primary" >
                  Submit
                </button>
              </div>
        </form>
    );
}

export default Hookform;
