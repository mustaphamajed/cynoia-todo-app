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
    label:'Username',
      placeholder: 'Enter you username',
      type: 'default',
      field: 'username',
    },
    {
    label:'Password',

      placeholder: 'password',
      type: 'default',
      field: 'password',
    },
];
  

export const projectInputFields: InputData[] = [
    {
      label:'Name',
      placeholder: 'Enter your project name',
      type: 'default',
      field: 'name',
    },
    {
    label:'Description',
      placeholder: 'Description',
      type: 'default',
      field: 'description',
    },
];
export const taskInputFields: InputData[] = [
    {
      label:'Title',
      placeholder: 'Title',
      type: 'default',
      field: 'title',
    },
    {
    label:'Description',
      placeholder: 'Description',
      type: 'default',
      field: 'description',
    },
];
export const staticProjectData = [
    { id: 1, name: 'project 1', description: 'description 1' },
    {id:2,name:'project 2', description:'description 2'},
    {id:3,name:'project 3', description:'description 3'}
    
]