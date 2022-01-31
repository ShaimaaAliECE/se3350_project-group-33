import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import NumberContainer from "./components/NumberContainer";
import "bootstrap/dist/css/bootstrap.min.css";
//import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

function App() {
	return (
		<div>
			<NavbarComponent />
			<NumberContainer />
			<Footer />
		</div>
	);
}

export default App;
