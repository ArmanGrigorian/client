import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import "./User.scss";

const User = () => {
	const { user } = useContext(UserContext);

	return (
		<figure className="user">
			<img className="user__avatar" src={user.avatar} alt={`avatar of ${user.name}`} />
			<figcaption className="user__name">{user.name}</figcaption>
		</figure>
	);
};

export default User;
