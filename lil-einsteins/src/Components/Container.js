import {useState, useCallback, memo, useEffect} from "react";
import {ItemTypes} from "./ItemTypes";
import update from "immutability-helper";
import {useDrop} from "react-dnd";
import dingSound from "./sounds/Correct.mp3";
import hmmSound from "./sounds/Wrong.mp3";
import Popup from "./Popup";
 
var audio1 = new Audio(dingSound);
var audio2 = new Audio(hmmSound);
var mistakesMade = 0 ;

const style = {
	height: "3rem",
	width: "3rem",
	marginRight: "5px",
	padding: "1rem",
	textAlign: "center",
	fontSize: "1rem",
	lineHeight: "normal"
};

//Creating function container for draggable boxes
export const Container = memo(function Container({shouldAccept}) {
	const [dustbins, setDustbins] = useState([
		{accepts: [ItemTypes.BOX], lastDroppedItem: null}
	]);

	const [droppedBoxNames, setDroppedBoxNames] = useState([]);
	const [solved, setSolved] = useState(false);

	const [mistakeCounter, setMistakeCounter] = useState(0);


	function isDropped(boxName) {
		return droppedBoxNames.indexOf(boxName) > -1;
	}
	
	//Function handles the draggable number component when it is dropeed 
	const handleDrop = useCallback(
		(index, item) => {
			const {name} = item;
			if (item.name == `${shouldAccept}`) {
				audio1.play();
				setSolved(true);
			} else if (item.name != `${shouldAccept}`) {
				audio2.play();
				mistakesMade++;
				console.log(mistakesMade);

				if (mistakesMade === 3){
					//Trigger event for when the player makes 3 mistakes
					<Popup trigger={true}> 
					 <h3>Oops!</h3>
                <p> You have made 3 mistakes!</p> 
                <p>Would you like to return to the previous level?</p>
					</Popup>
					//alert("3 mistakes have been made");
				}
				setSolved(false);
			}
			
			setDroppedBoxNames(
				update(droppedBoxNames, name ? {$push: [name]} : {$push: []})
			);
			setDustbins(
				update(dustbins, {
					[index]: {
						lastDroppedItem: {
							$set: item
						}
					}
				})
			);
			setMistakeCounter(mistakeCounter++)
		},
		[droppedBoxNames, dustbins,setMistakeCounter]
	);
	

	useEffect(() => { 
		//setMistakeCounter(mistakeCounter++)

	},[
		shouldAccept,
		setMistakeCounter
	]);

	const onDrop = (item) => handleDrop(0, item);

	const [{isOver, canDrop}, drop] = useDrop({
		accept: dustbins[0].accepts,
		drop: onDrop,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});
	const isActive = isOver && canDrop;
	let backgroundColor = "#CBD5E1";
	if (isActive) {
		backgroundColor = "darkgreen";
	} else if (canDrop) {
		backgroundColor = "darkkhaki";
	}

	return (
		<div>
			<div style={{overflow: "hidden", clear: "both"}} id={mistakeCounter}>
				{dustbins.map(({accepts, lastDroppedItem}, index) => (
					<div
						key={index}
						ref={drop}
						className="flex justify-center items-center"
						role="Dustbin"
						style={{...style, backgroundColor}}
					>
						{lastDroppedItem &&
							lastDroppedItem?.name == shouldAccept &&
							`${shouldAccept}`}
					</div>
				))}
			</div>
		</div>
	);
});
