export const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };
  
  export const setLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const removeLocalStorage = (key) => {
    return localStorage.removeItem(key);
  };