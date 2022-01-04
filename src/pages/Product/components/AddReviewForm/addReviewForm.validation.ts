import * as yup from 'yup';
const addReviewFormValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  review: yup.string(),
  rating: yup.number().required()
});

export { addReviewFormValidationSchema };
