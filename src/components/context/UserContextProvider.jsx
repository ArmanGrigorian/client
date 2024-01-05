/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const UserContext = createContext(null);

const initialState = {
	name: "no user",
	avatar: "/images/unknown.png",
};

function reducer(state, action) {
	switch (action.type) {
		case "change":
			state = { ...action.payload };
			return state;
		default:
			return state;
	}
}

const UserContextProvider = ({ children }) => {
	const [user, dispatch] = useReducer(reducer, initialState);

	return <UserContext.Provider value={{ user, dispatch }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
