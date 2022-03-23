import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import TutorialArray from "./components/TutorialArray";
import TutorialComponent from "./components/TutorialComponent";
import "bootstrap/dist/css/bootstrap.min.css";
//import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

function App() {
	return (
		<div>
			<NavbarComponent />
			<br></br>
			<TutorialComponent/>
			{/* <TutorialArray /> */}
			<Footer />
		</div>
	);
}

export default App;
