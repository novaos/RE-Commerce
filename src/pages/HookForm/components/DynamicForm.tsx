import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Error from './Error';
import { useForm, useFieldArray } from 'react-hook-form';
import { IDynamicForm } from '../interfaces/dynamic-form';

const DynamicForm = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    friends: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required(t('GLOBAL.VALIDATION.required'))
        })
      )
      .required(t('GLOBAL.VALIDATION.required'))
  });

  const { register, control, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      friends: [{name: ''}]
    }
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'friends'
  });

  const onSubmit = (data: IDynamicForm) => {
    console.log(data);
  };

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="container my-3">
				<div>
          {fields.map((field, index) => {
            return (
              <div className="columns" key={field.id}>
                <div className="column is-four-fifths">
                  <label className="label" htmlFor='name'>
                  Name
                  </label>
                  <input
                    placeholder="Your name"
                    type="text"
                    className="input"
                    {...register(`friends.${index}.name`)}
                  />
                  {errors.friends && <Error message={errors.friends[index]?.name?.message} />}
                </div>
                <div className="column">
                    <button type="button"  className="button is-link is-light" onClick={() => remove(index)}>
                    Delete
                    </button>
                </div>
              </div>
            )
          })}

            <button
              type="button"
              className="button is-link is-light"
              onClick={() => {
                append({ name: '' });
              }}
            >
              Add Friend
            </button>
        </div>
			</div>

			<button type="submit" className="button is-primary" >
			Submit
			</button>
		</form>
	);
};

export default DynamicForm;
