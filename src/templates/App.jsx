import "../styles/reset.css"
import "font-awesome/css/font-awesome.min.css"
import '../styles/App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom"

function App() {
	return (
		<div className="App">
			<div className="container">
				<Router>
					<Header></Header>
					<Content></Content>
				</Router>
			</div>
		</div>
	);
}

export default App;
