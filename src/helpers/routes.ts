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
      },
   
   
  
  } as const;
  
  export type RouteName = keyof typeof ROUTE_NAMES;