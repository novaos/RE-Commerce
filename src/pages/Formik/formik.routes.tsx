import BasicForm from './components/BasicForm';
import CustomValidationForm from './components/CustomValidationForm';
import DynamicForm from './components/DynamicForm';

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
    path: '/dynamic',
    component: DynamicForm
  },
  {
    path: '*',
    component: BasicForm
  }
];
