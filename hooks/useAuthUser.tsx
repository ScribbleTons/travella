import React, { createContext, useContext, useState } from 'react';

interface User {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	isAgent: boolean;
}

type SignInFn = { password: string; email: string };
type TAuthContext = {
	user: User | null;
	signin: (p: SignInFn) => Promise<boolean>;
	signout: () => void;
};
const AuthContext = createContext<TAuthContext>({} as TAuthContext);

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);

	function signout() {
		setUser(null);
	}

	async function signin({ password, email }: SignInFn) {
		try {
			const res = await fetch('https://dummyjson.com/users/1').then((res) =>
				res.json()
			);

			const payload = {
				...res,
				isAgent: true,
			} as User;

			setUser(payload);
			return true;
		} catch (error) {
			return false;
		}
	}

	const value = { user, signin, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
