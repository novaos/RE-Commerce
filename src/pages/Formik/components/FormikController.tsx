import Input from './Input';

type Props = {
  control: string;
  name: string;
  label: string;
  type: 'text' | 'email';
  inputClass?: string;
};

function FormikController(props: Props) {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <Input {...rest} />;
    // case 'textArea':
    //   return <TextArea {...rest} />;
    // case 'select':
    //   return <Select {...rest} />;
    // case 'radio':
    //   return <RadioButtons {...rest} />;
    // case 'checkbox':
    //   return <CheckBoxes {...rest} />;
    default:
      return null;
  }
}
export default FormikController;
