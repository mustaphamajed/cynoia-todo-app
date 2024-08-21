interface InputData {
    placeholder: string;
    type:
      | 'default'
      | 'number-pad'
      | 'decimal-pad'
      | 'numeric'
      | 'email-address'
      | 'phone-pad'
      | 'visible-password';
    field: string;
    label?: string;
}
  
export const loginInputFields: InputData[] = [
   
    {
    label:'Email',
      placeholder: 'Enter you email',
      type: 'default',
      field: 'email',
    },
    {
    label:'Password',

      placeholder: 'password',
      type: 'default',
      field: 'password',
    },
  ];