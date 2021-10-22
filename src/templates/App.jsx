import "../styles/reset.css"
import "font-awesome/css/font-awesome.min.css"
import '../styles/App.css';
import Header from "./Header";
import Content from "./Content";
import { BrowserRouter as Router } from "react-router-dom"
import storeConfig from "../store/storeConfig";
import { Provider } from "react-redux";

const store = storeConfig()

export default function App() {
	return (
		<Provider store={store}>
				<div className="App">
					<div className="container">
						<Router>
							<Header></Header>
							<Content></Content>
						</Router>
					</div>
				</div>
		</Provider>
	)
}