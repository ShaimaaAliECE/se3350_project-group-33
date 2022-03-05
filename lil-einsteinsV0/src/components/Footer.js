import React from "react";
import {Container} from "react-bootstrap";
import "./Components.css";

export default function Footer() {
	return (
		<Container fluid className="color-foot my-auto">
			<div className="footer-child">
				<img
					src={require("../images/logo.png")}
					alt="logo"
					width="20"
					height="20"
				/>
			</div>
			<div className="footer-child">
				<p style={{color: "#000", textAlign: "right"}}>2022</p>
			</div>
		</Container>
	);
}
