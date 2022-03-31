import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import TutorialComponent from "./components/TutorialComponent";
import "bootstrap/dist/css/bootstrap.min.css";
//import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

function Tutorial() {
	return (
		<div>
			<NavbarComponent />
			<br></br>
			<TutorialComponent/>
			<Footer />
		</div>
	);
}

export default Tutorial;
