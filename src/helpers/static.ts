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
  
export const staticProjectData = [
    { id: 1, name: 'project 1', description: 'description 1' },
    {id:2,name:'project 2', description:'description 2'},
    {id:3,name:'project 3', description:'description 3'}
    
]