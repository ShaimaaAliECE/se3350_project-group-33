import {useState, useCallback, memo, useEffect} from "react";
import {ItemTypes} from "./ItemTypes";
import update from "immutability-helper";
import {useDrop} from "react-dnd";
import dingSound from "./sounds/Correct.mp3";
import hmmSound from "./sounds/Wrong.mp3";
import Popup from "./Popup";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

var audio1 = new Audio(dingSound);
var audio2 = new Audio(hmmSound);
var mistakesMade = 0;

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
	const [test, setTest] = useState(0);

	const [mistakeCounter, setMistakeCounter] = useState(0);
	const [tracker, setTracker] = useState(false);

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

				if (mistakesMade === 3) {
					//Trigger event for when the player makes 3 mistakes
					setTracker(true);
				}
				setSolved(false);
				setTest(test++);
				console.log(test);
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
			setMistakeCounter(mistakeCounter++);
		},
		[droppedBoxNames, dustbins, setMistakeCounter]
	);

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

	function handleLevelChange(level) {
		setTracker(false);
		mistakesMade = 0;
		cahngeLevel(level);
	}

	const navigate = useNavigate();
	const cahngeLevel = useCallback(
		(level) => navigate(level, {replace: true}),
		[navigate]
	);

	return (
		<div>
			<Popup trigger={tracker}>
				<h3>Oops!</h3>
				<p> You have made 3 mistakes!</p>
				<div>
					<Button className="mx-2" onClick={() => handleLevelChange("/Home")}>
						Home Screen
					</Button>
					<Button className="mx-2" onClick={() => handleLevelChange("/Level1")}>
						Back to Level 1
					</Button>
				</div>
			</Popup>
			<div style={{overflow: "hidden", clear: "both"}} id={test}>
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
