import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Level2 from "./Level2";
import Level3 from "./Level3";
import Level4 from "./Level4";
import Level5 from "./Level5";
import Tutorial from "./Tutorial.js";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/NavbarComponent";

//required change for push
//second required change for push

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		{/* <NavbarComponent /> */}
		<Router>
			<Routes className="my-5">
				<Route path="/Home" element={<Home />}></Route>
				<Route path="/Level1" element={<Tutorial />}></Route>
				<Route path="/level2" element={<Level2 />}></Route>
				<Route path="/level3" element={<Level3 />}></Route>
				<Route path="/level5" element={<Level4 />}></Route>
				<Route path="/level4" element={<Level5 />}></Route>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
