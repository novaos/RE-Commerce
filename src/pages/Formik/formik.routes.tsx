import BasicForm from './components/BasicForm';
import CustomValidationForm from './components/CustomValidationForm';

export const formikRoutes = [
  {
    path: '/basic',
    exact: true,
    component: BasicForm
  },
  {
    path: '/custom-validation',
    component: CustomValidationForm
  },
  {
    path: '*',
    component: BasicForm
  }
];
