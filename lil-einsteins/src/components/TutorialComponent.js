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

    //Layers
    //const[layer1,  setLayer1] = useState({show :true}); //Display Layers
    const[ layer1Content , setLayer1Content] = useState(createTutArray("s6",10)); //Visual Content

    const[layer2,  setLayer2] = useState({show :false}); //Display Layers
    const[ layer2Content , setLayer2Content] = useState([]); //Visual Content

    const[layer3,  setLayer3] = useState({show :false}); //Display Layers
    const[ layer3Content , setLayer3Content] = useState([]); //Visual Content
    const[ layer3Timeout, setLayer3Timeout] = useState(400);

    const[layer4,  setLayer4] = useState({show :false}); //Display Layers
    const[ layer4Content , setLayer4Content] = useState([]); //Visual Content
    const[ layer4Timeout, setLayer4Timeout] = useState(400);

    const[layer5,  setLayer5] = useState({show :false}); //Display Layers
    const[ layer5Content , setLayer5Content] = useState([]); //Visual Content
    const[ layer5Timeout, setLayer5Timeout] = useState(400);


    //Create visual array display as list components
    //I typically go (1,"s",1) ; "s" as spacer
    function createTutArray(){
        const arrayContent = [];

        // add array size if provided number
        for (var i = 0; i < arguments.length; i++){
            if (typeof(arguments[i]) === 'number'){
                for (let index = 0; index < arguments[i]; index++){
                    arrayContent.push(
                        <li>
                        <TutNumComponent></TutNumComponent>
                        </li>
                    )
                }
            }
            //add number of spaces provided "s#" so "s3"
            else if(arguments[i].length > 1 && typeof(arguments[i]) === 'string'  ){
                const tempArguement = parseInt(arguments[i].slice(1,arguments[1].length));
                for (let index = 0; index < tempArguement; index++){
                    arrayContent.push(
                    <li>
                        <Container style={{
                            width: 50, height: 50}}>
                        </Container>
                    </li>
                    )
                }
            }
            //add single space if a number isnt received "s"
            else{
                arrayContent.push(
                    <li>
                    <Container style={{
                        width: 50, height: 50}}>
                    </Container>
                </li>
                )
            }
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
                setLayer2Content(createTutArray("s4",5,"s4",5));
                setLayer3(false);
                setLayer4(false);
                setLayer5(false);
                break;

            case 2:
                setTutorialText("Then the left sublist is further divided until it only contains one value.")
                setLayer3(true);
                setLayer3Content(createTutArray("s2",3,"s2",2));

                setLayer4(true);
                setLayer4Content(createTutArray("s",2,"s",1,"s2"));
                
                setLayer5(true)
                setLayer5Content(createTutArray(1,"s",1));
                break;

            case 3:
                setTutorialText("Then you compare the two leftmost values and add the smaller value into a new array of size 2 followed by the larger value.")
                setLayer5Timeout(400);
                setLayer5Content(createTutArray(1,"s",));
            break;
            
            case 4:
                setTutorialText("Do this with all the remaining solo values on the left side.")
                setLayer4(true);
                setLayer4Content(createTutArray("s",2,"s",1,"s2",1,"s",1));
                setLayer5(false);
                break;

            case 5:
                setTutorialText("Then merge the array of size 2. This is done by checking which of the two arrays has the smaller first value. The smallest value is added to the new array.")
                setLayer3(true);
                setLayer4(false);
                setLayer5(false);
                break;

            case 6:
                setTutorialText("This process is repeated until the new array contains all the values from the two smaller ones.")
                setLayer3(false);
                break;

            case 7:
                setTutorialText("Once the entire left side is done, you can begin the process over again to sort the right side.")
                setLayer3(true);
                setLayer3Content(createTutArray("s12",3,"s2",2));
                setLayer4(true);
                setLayer4Content(createTutArray("s11",2,"s",1,"s2",1,"s",1)); 
                setLayer5(true);
                setLayer5Content(createTutArray("s10",1,"s",1));
                break;

            case 8:
                setTutorialText("Once the left and right side are sorted, perform one final combination of the two arrays to form the final sorted array. ")
                setLayer5(false);
                setLayer4(false);
                setLayer3(false);
                setLayer2(false);

                break;
            
        }
    });

    
        return(
            <div className="container">

                <div className="tutorialText"> 
                    <h5>{step}) {tutorialText}</h5>
                </div>
                <br></br>
                <div className="tutoialDisplay">
                    <div className="layer1">
                        <ul className="numberList">
                            {createTutArray(25)}
                        </ul>
                    </div>
                    <br></br>

                    <div className="layer2">
                    <CSSTransition
                    in={layer2}
                    timeout={400}
                    classNames = "numberContainer"
                    unmountOnExit /*when the element disappears, it’s actually going to leave the DOM*/
                    appear
                    >
                        <ul>
                            {layer2Content}
                        </ul>
                    </CSSTransition>
                    </div>
                    <br></br>

                    <div className="layer3" >
                    <CSSTransition
                    in={layer3}
                    timeout={layer3Timeout}
                    classNames = "numberContainer"
                    unmountOnExit/*when the element disappears, it’s actually going to leave the DOM*/
                    appear
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
                    timeout={layer4Timeout}
                    classNames = "numberContainer"
                    unmountOnExit/*when the element disappears, it’s actually going to leave the DOM*/
                    appear
                    >
                        <ul>
                            {layer4Content}
                        </ul>
                    </CSSTransition>
                    </div>
                    <br></br>

                    <div className="layer5">
                    <CSSTransition
                    in={layer5}
                    timeout={layer5Timeout}
                    classNames = "numberContainer"
                    unmountOnExit/*when the element disappears, it’s actually going to leave the DOM*/
                    appear
                    >
                        <ul>
                            {layer5Content}
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