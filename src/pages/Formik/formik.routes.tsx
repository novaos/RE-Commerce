import BasicForm from './components/BasicForm';
import CustomValidationForm from './components/CustomValidationForm';
import DynamicForm from './components/DynamicForm';
import ReusableForm from './components/ReusableForm';

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
    path: '/reusable',
    component: ReusableForm
  },
  {
    path: '*',
    component: BasicForm
  }
];
