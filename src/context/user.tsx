import {createContext, PropsWithChildren, useState} from 'react';
import userImage from '../assets/kitten.jpeg';

const useValue = () => {
	const [userName, setUserName] = useState('Kitten');
	const userLogo = userImage;
	const userId = 3;

	return { userId, userName, setUserName, userLogo };
}

export const UserContext = createContext({} as ReturnType<typeof useValue>);

export const UserProvider = ({ children }: PropsWithChildren) => {
	return <UserContext.Provider value={useValue()}>{children}</UserContext.Provider>;
};
