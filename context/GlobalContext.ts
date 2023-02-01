import { createContext } from 'react';
const value = { currentClickedMarker: null };
export const GlobalContext = createContext(value);

export default GlobalContext;
