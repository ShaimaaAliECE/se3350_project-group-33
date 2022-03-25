import {useState} from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {Box} from "./Components/DraggableBox";
import {Container} from "./Components/Container";
import infoIcon from "./images/icons8-info.png";
import nextIcon from "./images/icons8-next.png";
import randomizeNewArray from "./Components/GenerateNumbers";
import {ItemTypes} from "./Components/ItemTypes";
import "bootstrap/dist/css/bootstrap.min.css";

const numbers = randomizeNewArray();

const Level4 = () => {
    const boxDetails = [
		{name: `${numbers[5]}`, type: ItemTypes.BOX},
		{name: `${numbers[0]}`, type: ItemTypes.BOX},
		{name: `${numbers[2]}`, type: ItemTypes.BOX},
		{name: `${numbers[9]}`, type: ItemTypes.BOX},
		{name: `${numbers[1]}`, type: ItemTypes.BOX},
		{name: `${numbers[8]}`, type: ItemTypes.BOX},
		{name: `${numbers[3]}`, type: ItemTypes.BOX},
		{name: `${numbers[6]}`, type: ItemTypes.BOX},
		{name: `${numbers[7]}`, type: ItemTypes.BOX},
		{name: `${numbers[4]}`, type: ItemTypes.BOX},
        {name: `${numbers[11]}`, type: ItemTypes.BOX},
		{name: `${numbers[15]}`, type: ItemTypes.BOX},
		{name: `${numbers[13]}`, type: ItemTypes.BOX},
		{name: `${numbers[19]}`, type: ItemTypes.BOX},
		{name: `${numbers[17]}`, type: ItemTypes.BOX},
		{name: `${numbers[10]}`, type: ItemTypes.BOX},
		{name: `${numbers[16]}`, type: ItemTypes.BOX},
		{name: `${numbers[12]}`, type: ItemTypes.BOX},
		{name: `${numbers[18]}`, type: ItemTypes.BOX},
		{name: `${numbers[14]}`, type: ItemTypes.BOX}
	];

    const [boxes] = useState(boxDetails);
	const [droppedBoxNames] = useState([]);

	function isDropped(boxName) {
		return droppedBoxNames.indexOf(boxName) > -1;
	}

    return (
		<div>
			<DndProvider backend={HTML5Backend}>
				<div className="fixed bottom-0 bg-red-600 py-6  left-0 right-0 flex gap-1 justify-center">
					{boxes.map(({name, type}, index) => (
						<Box
							name={name}
							type={type}
							isDropped={isDropped(name)}
							key={index}
						/>
					))}
				</div>
			</DndProvider>
        </div>
    );
};

export default Level4;