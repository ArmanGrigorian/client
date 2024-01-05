import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import "./Form.scss";

const Form = () => {
	const { dispatch } = useContext(UserContext);

	async function handleSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.target);
		const newUser = Object.fromEntries(fd);

		const reader = new FileReader();
		reader.readAsDataURL(newUser.avatar);

		reader.onload = function () {
			dispatch({
				type: "change",
				payload: { ...newUser, avatar: reader.result },
			});
		};
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="form__div">
				<label className="form__label" htmlFor="userName">
					Name:
				</label>
				<input
					className="form__input form__input--text"
					type="text"
					name="name"
					id="userName"
					required
				/>
			</div>

			<div className="form__div">
				<label className="form__label" htmlFor="userAvatar">
					Avatar:
				</label>
				<input
					className="form__input form__input--file"
					type="file"
					name="avatar"
					id="userAvatar"
					required
					accept="image/*"
				/>
			</div>

			<input className="form__submit" type="submit" value="Set" />
		</form>
	);
};

export default Form;
