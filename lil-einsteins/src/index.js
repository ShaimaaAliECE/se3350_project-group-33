import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Level2 from "./Level2";
import Tutorial from "./Tutorial.js";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/NavbarComponent";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function RouteTutorial() {
	return <Tutorial />;
}

function RouteLevel2() {
	return <Level2 />;
}

ReactDOM.render(
	<React.StrictMode>
		<NavbarComponent />
		<Router>
			<Routes className="my-5">
				<Route path="/level1" element={<Tutorial />}></Route>
				<Route path="/level2" element={<Level2 />}></Route>
				<Route path="/" element={<Tutorial />}></Route>
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
