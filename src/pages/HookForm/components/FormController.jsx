import React from 'react';
import Input from './Input';

const FormController = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />
    // case "textArea":
    //   return <TextArea {...rest} />
    // case "select":
    //   return <Select {...rest} />
    // case "radio":
    //   return <RadioButtons {...rest} />
    // case "checkbox":
    //   return <CheckBoxes {...rest} />
    default:
      return null
  }
}

export default FormController;