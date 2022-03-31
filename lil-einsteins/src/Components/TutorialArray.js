import {Container} from "react-bootstrap";
import react, {useEffect} from "react";
import React, {useState} from "react";
import "./Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {CSSTransition} from "react-transition-group";
import TutNumComponent from "./TutNumComponent";

function TutorialArray(props) {
	let arrayContent = [],
		idCounter,
		sideCheck = 0,
		showNum = false,
		totalArrayCounter = 0,
		totalDisplayCounter = 0;

	const [tutorialNumbers, setTutorialNumbers] = useState(
		props.itutorialNumbers
	);
	const [buildArray, setBuildArray] = useState(props.ibuildArray);
	const [tempClassName, setTempClassName] = useState(props.itempClassName);
	const [tempArrayContent, setTempArrayContent] = useState([]);

	const renderSpace = (idCounter) => (
		<li id={idCounter}>
			{" "}
			<Container style={{width: 50, height: 50}}></Container>
		</li>
	);

	// const [layer1Content, setLayer1Content] = useState(
	//   TutorialArrayComponent(tutorialNumbers,"A","s6", 10,"s7")
	// ); //Visual Content
	// const [layer2Content, setLayer2Content] = useState(
	//   TutorialArrayComponent(tutorialNumbers,"A","s3", 5, "s6", 5)
	// ); //Visual Content
	// const [layer3Content, setLayer3Content] = useState(
	//   TutorialArrayComponent(tutorialNumbers,"A","s2",3,"s",2,"s5",3,"s",2 )
	// ); //Visual Content
	// const [layer4Content, setLayer4Content] = useState(
	//   TutorialArrayComponent(tutorialNumbers,"A","s",2,"s",1,"s",1,"s",1,"s3",2,"s",1,"s",1,"s",1)
	// ); //Visual Content
	// const [layer5Content, setLayer5Content] = useState(
	//   TutorialArrayComponent(tutorialNumbers,"A",1,"s", 1, "s8",1,"s",1)
	// ); //Visual Content

	// function animate(animation) {
	//     let timeout = 400;
	//let animation =  [{layer:"", block:[]}] ;

	//         for(let i = 0; i < arguments.length; i++){

	//             //First element of each Animation
	//             switch (arguments[i].layer){
	//                 default:
	//                 console.log("error");
	//                 break;

	//                 case "L1":
	//                 //setLayer1Content(15);
	//                 break;

	//                 case "L2":
	//                 //setLayer2Content();
	//                 break;

	//                 case "L3":
	//                 //setLayer3Content();
	//                 break;

	//                 case "L4":
	//                 //setLayer4Content();
	//                 break;

	//                 case "L5":
	//                 //setLayer5Content();
	//                 break;
	//             }
	//         }
	//   }

	// for(let i = 0; i < tutorialNumbers.length; i++){
	//   arrayContent.push(
	//    <TutNumComponent inumber = {tutorialNumbers[i]} itempClassname = {"numberAppear"} iidCounter = {i} ishowNum = {true} />
	//   )
	// }

	//Build Array display with input from react component props

	console.log("buildarray from props: " + props.buildArray);
	console.log("buildarray: " + buildArray);
	for (let i = 0; i < buildArray.length; i++) {
		if (typeof buildArray[i] === "number") {
			totalArrayCounter += buildArray[i];
			totalDisplayCounter += buildArray[i];
		}
		if (typeof buildArray[i] === "string") {
			let tempLength =
				buildArray[i].length > 1
					? parseInt(buildArray[i].slice(1, buildArray[i].length))
					: 1;
			totalDisplayCounter += tempLength;
		}
	}

	function isRight() {
		if (
			totalArrayCounter <= tutorialNumbers.length / 2 &&
			totalDisplayCounter >= 15
		) {
			return true;
		} else {
			return false;
		}
	}

	if (isRight()) {
		sideCheck = 5;
		idCounter = 5;
	} else {
		idCounter = 0;
		sideCheck = 0;
	}

	useEffect(() => {
		setTempArrayContent(arrayContent);
		setTempClassName(props.itempClassName);
		setBuildArray(props.ibuildArray);
		setTutorialNumbers(props.itutorialNumbers);
	}, [props.itutorialNumbers, props.itempClassName, arrayContent]);

	buildArray.forEach(buildArrayDisplay);
	function buildArrayDisplay(buildType) {
		if (typeof buildType === "number") {
			for (let i = 0; i < buildType; i++) {
				arrayContent.push(
					<TutNumComponent
						inumber={tutorialNumbers[sideCheck]}
						itempClassName={tempClassName}
						iidCounter={idCounter}
						ishowNum={showNum}
					/>
				);

				idCounter++;
				sideCheck++;
			}
		}

		if (typeof buildType === "string") {
			//let tempLength =  (buildType.length < 1) ? parseInt(buildType.slice(1, buildType.length)) : 1 ;

			let tempLength =
				buildType.length > 1
					? parseInt(buildType.slice(1, buildType.length))
					: 1;

			for (let i = 0; i < tempLength; i++) {
				arrayContent.push(renderSpace("space"));
			}
		}
	}

	return tempArrayContent;
}

export default TutorialArray;
