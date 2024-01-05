import { useContext, useState } from "react";
import { nameFormatter } from "../../utils/nameFormatter";
import { UserContext } from "../context/UserContextProvider";
import "./DropBox.scss";

const DropBox = () => {
	const [drag, setDrag] = useState(false);
	const { user, dispatch } = useContext(UserContext);

	function handleDragStart(e) {
		e.preventDefault();
		setDrag(true);
	}
	function handleDragOver(e) {
		e.preventDefault();
		setDrag(true);
	}

	function handleDragLeave(e) {
		e.preventDefault();
		setDrag(false);
	}

	function handleDrop(e) {
		e.preventDefault();

		const name = nameFormatter(e.dataTransfer.files[0].name);
		const reader = new FileReader();

		reader.readAsDataURL(e.dataTransfer.files[0]);

		reader.onload = function () {
			reader.result;

			console.log(reader.result);

			dispatch({
				type: "change",
				payload: { ...user, name: name, avatar: reader.result },
			});
		};
	}

	return drag ? (
		<div
			className="box box--full"
			onDragStart={handleDragStart}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}>
			<p>Drop file to download</p>
		</div>
	) : (
		<div
			className="box box--empty"
			onDragStart={handleDragStart}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}>
			<p>Drag file to download</p>
		</div>
	);
};

export default DropBox;
