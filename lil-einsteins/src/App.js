import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import NumberContainer from "./components/NumberContainer";
import TutorialComponent from "./components/TutorialComponent";
import "bootstrap/dist/css/bootstrap.min.css";
//import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

function App() {
	return (
		<div>
			<NavbarComponent />
			<br></br>
			<TutorialComponent/>
			{/* <NumberContainer /> */}
			<Footer />
		</div>
	);
}

export default App;
