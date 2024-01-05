import User from "./components/user/user";
import Form from "./components/form/Form";
import DropBox from "./components/dropBox/DropBox";

const App = () => {
	return (
		<div className="app">
			<User />
			<Form />
			<DropBox />
		</div>
	);
};

export default App;
