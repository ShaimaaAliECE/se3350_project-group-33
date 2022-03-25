import React, {useState, useEffect, useCallback} from "react";
import "./Components/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {CSSTransition} from "react-transition-group";
import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";

import TutNumComponent from "./Components/TutNumComponent";
import TutorialArrayComponent from "./Components/TutorialArrayComponent";

function Tutorial() {
	const [tutorialText, setTutorialText] = useState(
		"You’ve selected the merge sort algorithm."
	);

	const [step, setStep] = useState(0);
	const [levelAllow, setlevelAllow] = useState(true);

	//Populate tutorial Numbers
	var tempTutorialNumbers = [];
	for (var i = 0; i < 10; i++) {
		const tempNumber = Math.floor(Math.random() * 10) + 1;
		tempTutorialNumbers.push(tempNumber);
	}

	const [tutorialNumbers, setTutorialNumbers] = useState(tempTutorialNumbers);

	//TEST VARIABLE
	var tester = "";
	var tester1 = "";
	//

	//Set up tutorial numbers
	//var tutorialNumbers = [];

	//TEST
	for (var i = 0; i < tempTutorialNumbers.length; i++) {
		tester1 += "," + tutorialNumbers[i].toString();
	}
	tester = tempTutorialNumbers.length;

	// setTutorialNumbers(tempTutorialNumbers);

	// THOUGHT PROCESS
	//Store random 10 numbers and pass it to tutiral arrauy builder
	//recognize array im builder
	//boxes dissappear in right order
	//

	//

	//Layers
	//const[layer1,  setLayer1] = useState({show :true}); //Display Layers
	const [layer1Content, setLayer1Content] = useState(
		TutorialArrayComponent(tutorialNumbers, "A", "s6", 10)
	); //Visual Content

	const [layer2, setLayer2] = useState({show: false}); //Display Layers
	const [layer2Content, setLayer2Content] = useState([]); //Visual Content

	const [layer3, setLayer3] = useState({show: false}); //Display Layers
	const [layer3Content, setLayer3Content] = useState([]); //Visual Content

	const [layer4, setLayer4] = useState({show: false}); //Display Layers
	const [layer4Content, setLayer4Content] = useState([]); //Visual Content

	const [layer5, setLayer5] = useState({show: false}); //Display Layers
	const [layer5Content, setLayer5Content] = useState([]); //Visual Content

	//Animations for each steps
	useEffect(() => {
		switch (step) {
			default:
				setTutorialText("You’ve selected the merge sort algorithm.");
				setLayer2(false);
				setLayer3(false);
				setLayer4(false);
				setLayer5(false);
				setStep(0);
				setlevelAllow(true);
				break;

			case 1:
				setlevelAllow(true);
				setTutorialText(
					"This algorithm works by dividing the full list of values into two equally sized sublists."
				);
				setLayer2(true);
				setLayer2Content(
					TutorialArrayComponent(tutorialNumbers, "A", "s4", 5, "s4", 5)
				);
				setLayer3(false);
				setLayer4(false);
				setLayer5(false);
				break;

			case 2:
				setTutorialText(
					"Then the left sublist is further divided until it only contains one value."
				);
				setLayer2(true);
				setLayer2Content(
					TutorialArrayComponent(tutorialNumbers, "A", "s4", 5, "s4", 5)
				);

				setLayer3(true);
				setLayer3Content(
					TutorialArrayComponent(tutorialNumbers, "A", "s2", 3, "s2", 2)
				);

				setLayer4(true);
				setLayer4Content(
					TutorialArrayComponent(tutorialNumbers, "A", 2, "s", 1)
				);

				setLayer5(true);
				setLayer5Content(
					TutorialArrayComponent(tutorialNumbers, "A", 1, "s", 1)
				);
				break;

			case 3:
				setTutorialText(
					"Then you compare the two leftmost values and add the smaller value into a new array of size 2 followed by the larger value."
				);
				setLayer2(true);
				setLayer3(true);
				setLayer4(true);
				setLayer5Content(TutorialArrayComponent("D", 1, "s", 1));
				setLayer5(true);
				break;

			case 4:
				setTutorialText(
					"Do this with all the remaining solo values on the left side."
				);
				setLayer2(true);
				setLayer3(true);
				setLayer4(true);
				setLayer4Content(
					TutorialArrayComponent(
						tutorialNumbers,
						"A",
						2,
						"s",
						1,
						"s3",
						1,
						"s",
						1
					)
				);
				setLayer5(true);
				break;

			case 5:
				setTutorialText(
					"Then merge the array of size 2. This is done by checking which of the two arrays has the smaller first value. The smallest value is added to the new array."
				);
				setLayer2(true);

				setLayer3(true);
				setLayer3Content(
					TutorialArrayComponent(tutorialNumbers, "A", "s2", 3, "s2", 2)
				);

				setLayer4(true);
				setLayer4Content(
					TutorialArrayComponent("D", 2, "s", 1, "s3", 1, "s", 1)
				);

				setLayer5(false);
				break;

			case 6:
				setTutorialText(
					"This process is repeated until the new array contains all the values from the two smaller ones."
				);
				setLayer2(true);
				setLayer3(true);
				setLayer3Content(TutorialArrayComponent("D", "s2", 3, "s2", 2));
				setLayer4(false);
				setLayer5(false);
				break;

			case 7:
				setTutorialText(
					"Once the entire left side is done, you can begin the process over again to sort the right side."
				);
				setLayer2(true);
				setLayer3(true);

				setLayer3Content(
					TutorialArrayComponent(tutorialNumbers, "A", "s12", 3, "s2", 2)
				);
				setLayer4(true);
				setLayer4Content(
					TutorialArrayComponent(
						tutorialNumbers,
						"A",
						"s11",
						2,
						"s",
						1,
						"s2",
						1,
						"s",
						1
					)
				);
				setLayer5(true);
				setLayer5Content(
					TutorialArrayComponent(tutorialNumbers, "A", "s10", 1, "s", 1)
				);
				break;

			case 8:
				setlevelAllow(true);
				setTutorialText(
					"Once the left and right side are sorted, perform one final combination of the two arrays to form the final sorted array. "
				);
				//setLayer5(false);
				//setLayer4(false);
				setLayer3Content(TutorialArrayComponent("D", "s12", 3, "s2", 2));

				//setLayer3(false);
				setLayer4Content(
					TutorialArrayComponent("D", "s11", 2, "s", 1, "s2", 1, "s", 1)
				);

				//setLayer2(false);
				setLayer5Content(TutorialArrayComponent("D", "s10", 1, "s", 1));

				break;

			case 9:
				setTutorialText(
					"Level 1 is done! press the button below to go to level 2, or use the buttons below to review"
				);

				setlevelAllow(false);

				break;
		}
	});

	const navigate = useNavigate();
	const handleLevelChange = useCallback(
		() => navigate("/Level2", {replace: true}),
		[navigate]
	);

	return (
		<div>
			<NavbarComponent level="Level1" />
			<div className="container">
				<div className="tutorialText">
					<h5>{tutorialText}</h5>
				</div>
				<br></br>
				<div className="tutoialDisplay">
					<div className="layer1">
						<ul className="numberList">{layer1Content}</ul>
					</div>
					<br></br>

					<div className="layer2">
						<CSSTransition
							in={layer2}
							//timeout={400}
							classNames="numberList"
							unmountOnExit /*when the element disappears, it’s actually going to leave the DOM*/
						>
							<ul>{layer2Content}</ul>
						</CSSTransition>
					</div>
					<br></br>

					<div className="layer3">
						<CSSTransition
							in={layer3}
							//timeout={layer3Timeout}
							classNames="numberList"
							unmountOnExit /*when the element disappears, it’s actually going to leave the DOM*/
							//appear
						>
							<ul>{layer3Content}</ul>
						</CSSTransition>
					</div>
					<br></br>

					<div className="layer4">
						<CSSTransition
							in={layer4}
							//timeout={layer4Timeout}
							classNames="numberList"
							unmountOnExit /*when the element disappears, it’s actually going to leave the DOM*/
							//appear
						>
							<ul>{layer4Content}</ul>
						</CSSTransition>
					</div>
					<br></br>

					<div className="layer5">
						<CSSTransition
							in={layer5}
							//timeout={layer5Timeout}
							classNames="numberList"
							unmountOnExit /*when the element disappears, it’s actually going to leave the DOM*/
							//appear
						>
							<ul>{layer5Content}</ul>
						</CSSTransition>
					</div>
				</div>

				<br></br>
				<Button
					variant="outline-dark"
					className="prevBtn"
					onClick={() => setStep(step - 1)}
				>
					Prev
				</Button>
				<Button
					disabled={!levelAllow}
					variant="outline-dark"
					className="nextBtn"
					onClick={() => setStep(step + 1)}
				>
					Next
				</Button>
				<Button
					variant="outline-dark"
					className="prevBtn"
					onClick={() => setStep(0)}
				>
					Reset
				</Button>

				<Button
					disabled={levelAllow}
					variant="outline-dark"
					className="prevBtn"
					onClick={() => handleLevelChange()}
				>
					Go to Level 2
				</Button>
			</div>
		</div>
	);
}

export default Tutorial;
