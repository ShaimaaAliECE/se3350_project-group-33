import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import "./Components.css";

export default function Component() {
	return (
		<Navbar className="color-nav" expand="lg">
			<Container>
				<img
					src={require("../images/logo.png")}
					alt="logo"
					width="20"
					height="20"
					className="me-2"
				/>
				<Navbar.Brand href="#home">Lil' Einsteins</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#merge">Merge Sort</Nav.Link>
						<Nav.Link href="#quick">Quick Sort</Nav.Link>
						<Nav.Link href="#shell">Shell Sort</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
