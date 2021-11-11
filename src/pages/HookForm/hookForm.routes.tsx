import BasicFormHook from './components/BasicForm';
import CustomValidationForm from './components/CustomValidationForm';
import DynamicForm from './components/DynamicForm';
import ReusableForm from './components/ReusableForm';

export const hookFormRoutes = [
  {
    path: '/basic',
    exact: true,
    component: BasicFormHook
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
    component: BasicFormHook
  }
];