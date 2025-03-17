import AppHeader from "./components/AppHeader";
import AppContextProvider from "./context/AppContextProvider";
import MasterRouter from "./router/MasterRouter";
import { Main } from "./styles";

const App = () => {
	return (
		<AppContextProvider>
			<Main>
				<AppHeader />
				<MasterRouter />
			</Main>
		</AppContextProvider>
	);
};

export default App;
