import "../styles/reset.css"
import "font-awesome/css/font-awesome.min.css"
import '../styles/App.css';
import Header from "./Header";
import Content from "./Content";
import { BrowserRouter as Router } from "react-router-dom"
import Context from "../context/Context";

function App() {
	return (
		<Context>
			<div className="App">
				<div className="container">
					<Router>
						<Header></Header>
						<Content></Content>
					</Router>
				</div>
			</div>
		</Context>
	);
}

export default App;
