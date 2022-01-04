import * as yup from 'yup';

const productHeaderValidationSchema = yup.object({
  size: yup.string().required(),
  color: yup.string().required(),
  count: yup.number().min(1).required()
});

export { productHeaderValidationSchema };
