import react, { useEffect } from "react";
import React, { useState } from 'react';
import "./Components.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CSSTransition} from "react-transition-group";
import {Container} from "react-bootstrap";

import TutNumComponent from "./TutNumComponent";


function Tutorial () {

    const[tutorialText, setTutorialText] = useState("You’ve selected the merge sort algorithm.")
    const[step, setStep] = useState(0);

    //Layers Enabled
    const[layer2,  setLayer2] = useState({show :false});
    const layer2Content = createTutArray(5);

    const[layer3,  setLayer3] = useState({show :false});
    const layer3Content = createTutArray(3);

    const[layer4,  setLayer4] = useState({show :false});
    const[layer4Content, setLayer4Content] = useState([]);

    const[layer5,  setLayer5] = useState({show :false});
    const[layer5Content, setLayer5Content] = useState([]);

    //Create tutorial array display as list components
    function createTutArray(num){
        const arrayContent = [];

        for (let index = 0; index < num; index++){
            arrayContent.push(
                <li>
                <TutNumComponent></TutNumComponent>
                </li>
            )
        }
        return(arrayContent);
    }


    //Animations for each steps
    useEffect(() => {
        switch(step){
            default:
                setTutorialText("You’ve selected the merge sort algorithm.");
                setLayer2(false);
                setLayer3(false);
                setLayer4(false);
                setLayer5(false);
                setStep(0);
                break;

            case 1:
                setTutorialText("This algorithm works by dividing the full list of values into two equally sized sublists.");
                setLayer2(true);
                break;

            case 2:
                setTutorialText("Then the left sublist is further divided until it only contains one value.")
                setLayer3(true);
                setLayer4(true);
                setLayer5(true);
                break;

            case 3:
                setTutorialText("Then you compare the two leftmost values and add the smaller one into a new array of size 2 followed by the larger one.")
                setLayer5(false);
            break;
            
            case 4:
                setTutorialText("Do this with all the solo values on the left side.")
                break;

            case 5:
                setTutorialText("Then merge the arrays of size 2. This is done by checking which of the two arrays has the smaller first value. The smallest value is added to the new array.")
                break;

            case 6:
                setTutorialText("This process is repeated until the new array contains all the values from the two smaller ones.")
                break;

            case 7:
                setTutorialText("Then merge the arrays of size 2. This is done by checking which of the two arrays has the smaller first value. The smallest value is added to the new array.")
                break;

            case 8:
                setTutorialText("Once the entire left side is done, you can begin the process over again to sort the right side.")
                setLayer2(true);
                setLayer3(true);
                setLayer4(true);
                setLayer5(true);
                break;

            case 9:
                setTutorialText("Once the left and right side are sorted, perform one final combination of the two arrays to form the final sorted array. ")
                break;
            
        }
    });

    
        return(
            <div className="container">

                <div className="tutorialText"> 
                    <h5>{tutorialText}</h5>
                </div>

                <div><p>{step}</p></div>

                <div className="tutoialDisplay">
                    <div className="layer1">
                        <ul className="numberList">
                            {createTutArray(10)}
                        </ul>
                    </div>
                    <br></br>

                    <div className="layer2">
                    <CSSTransition
                    in={layer2}
                    timeout={400}
                    classNames = "numberContainer"
                    unmountOnExit /*when the element disappears, it’s actually going to leave the DOM*/
                    >
                        <ul>
                            {createTutArray(5)}
                        </ul>
                    </CSSTransition>
                    </div>
                    <br></br>

                    <div className="layer3" >
                    <CSSTransition
                    in={layer3}
                    timeout={400}
                    classNames = "numberContainer"
                    unmountOnExit/*when the element disappears, it’s actually going to leave the DOM*/
                    >
                        <ul>
                            {layer3Content}
                        </ul>
                    </CSSTransition>
                    </div>
                    <br></br>

                    <div className="layer4">
                    <CSSTransition
                    in={layer4}
                    timeout={400}
                    classNames = "numberContainer"
                    unmountOnExit/*when the element disappears, it’s actually going to leave the DOM*/
                    >

                        <ul>
                            <li>
                            <TutNumComponent></TutNumComponent>
                            </li>
                            <li>
                            <TutNumComponent></TutNumComponent>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50}}>
                            </Container>
                            </li>
                            <li>
                            <TutNumComponent></TutNumComponent>
                            </li>
                        </ul>

                    </CSSTransition>
                    </div>
                    <br></br>

                    <div className="layer5">
                    <CSSTransition
                    in={layer5}
                    timeout={400}
                    classNames = "numberContainer"
                    unmountOnExit/*when the element disappears, it’s actually going to leave the DOM*/
                    >
                        <ul>
                            <li>
                            <TutNumComponent></TutNumComponent>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50}}>
                            </Container>
                            </li>
                            <li>
                            <TutNumComponent></TutNumComponent>
                            </li>
                        </ul>
                    </CSSTransition>
                    </div>
                </div>  

                <br></br>
                <button className="prevBtn" onClick ={() => setStep(step - 1)}>
                    Prev
                </button>
                <button className="nextBtn" onClick ={() => setStep(step + 1)}>
                    Next
                </button>
                <button className="prevBtn" onClick ={() => setStep(0)}>
                    Reset
                </button>
    
            </div>
        );
    
}

export default Tutorial; 