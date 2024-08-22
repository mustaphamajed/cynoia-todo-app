export const isValidPassword = (password: string): boolean => {
    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;
    return passwordRegex.test(password);
};
  
export enum STORAGE {
    accessToken = 'accessToken',
}
  
