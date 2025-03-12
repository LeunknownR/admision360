import AppHeader from "./components/AppHeader";
import MasterRouter from "./MasterRouter";
import { Main } from "./styles";

const App = () => {
	return (
		<Main>
			<AppHeader />
			<MasterRouter />
		</Main>
	);
};

export default App;
