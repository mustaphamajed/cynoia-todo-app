export const ROUTE_NAMES = {
    STACK: {
      MAIN: 'Main',
      AUTH: 'Auth',
     
    },
 
    AUTH: {
        LOGIN: 'Login',
      REGISTER: 'Register',
        
    },
    MAIN: {
        HOME: 'Home',
        PROJECT_DETAILS: 'ProjectDetails',
        NEW_PROJECT: 'NewProject',
        NEW_TASK: 'NewTask',

      },
   
   
  
  } as const;
  
  export type RouteName = keyof typeof ROUTE_NAMES;