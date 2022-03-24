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
			{/* <TutorialArray itutorialNumbers = {[1,2,3,4,5,6,7,8,9,10]} ibuildArray =  {["s3", 5, "s6", 5]} itempClassName = {"numberAppear"}/> */}
			<Footer />
		</div>
	);
}

export default App;
