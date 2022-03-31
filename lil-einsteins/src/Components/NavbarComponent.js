import {React} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import "./Components.css";
import {useLocation} from "react-router-dom";

export default function Component(props) {
	console.log("test");
	return (
		<Navbar className="color-nav m" expand="lg">
			<Container>
				<img
					src={require("../images/logo.png")}
					alt="logo"
					width="20"
					height="20"
					className="me-2"
				/>
				<Navbar.Brand href="Home">Lil' Einsteins</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="Level1">Merge Sort</Nav.Link>
						<Nav.Link href="#quick"></Nav.Link>
						<Nav.Link href="#shell"></Nav.Link>
					</Nav>
					<Navbar.Brand>{props.level}</Navbar.Brand>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
