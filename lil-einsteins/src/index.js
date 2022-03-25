import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Level2 from "./Level2";
import Level3 from "./Level3";
import Level4 from "./Level4";
import Tutorial from "./Tutorial.js";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/NavbarComponent";

//required change for push

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function RouteTutorial() {
	return <Tutorial />;
}

function RouteLevel2() {
	return <Level2 />;
}

function RouteLevel3() {
	return <Level3 />;
}

function RouteLevel4() {
	return <Level4 />;
}

ReactDOM.render(
	<React.StrictMode>
		<NavbarComponent />
		<Router>
			<Routes className="my-5">
				<Route path="/tutorial" element={<Tutorial />}></Route>
				<Route path="/level2" element={<Level2 />}></Route>
				<Route path="/level3" element={<Level3 />}></Route>
				<Route path="/level4" element={<Level4 />}></Route>
				<Route path="/" element={<Tutorial />}></Route>
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
