import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";
import Footer from "./Components/Footer";
import TutorialComponent from "./Components/TutorialComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function Tutorial() {
	return (
		<div>
			<NavbarComponent level="Level1" />
			<br></br>
			<TutorialComponent />
			<Footer />
		</div>
	);
}

export default Tutorial;
