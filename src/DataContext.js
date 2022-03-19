import {createContext, useState } from 'react';
export const DataContext = createContext();
export const DataProvider = ({children}) =>
{
	const [Numero, setNumero] = useState(0);
	return(
		<DataContext.Provider value={{Numero,setNumero}}>
			{children}
		</DataContext.Provider>);
}