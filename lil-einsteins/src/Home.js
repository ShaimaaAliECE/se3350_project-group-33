import {React, useCallback} from "react";
import NavbarComponent from "./Components/NavbarComponent";
import "./Home.css";
import {Button, Row, Col, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();
	const handleLevelChange = useCallback(
		() => navigate("/Level1", {replace: true}),
		[navigate]
	);

	return (
		<div>
			<NavbarComponent level="Home" />;
			<h1 class="title fade-in-text">
				Welcome To Lil' Einsteins Sorting Algorithms!
			</h1>
			<h5 class="subtitle fade-in-text">Get Started:</h5>
			<Container className="my-5" style={{"max-width": "25%"}}>
				<Row className="my-3">
					<Button
						className="sort-button fade-in-button"
						onClick={() => handleLevelChange()}
					>
						Merge Sort!
					</Button>
				</Row>
				<Row className="my-3">
					<Button className="sort-button fade-in-button" disabled>
						More Coming Soon
					</Button>
				</Row>
			</Container>
		</div>
	);
}
