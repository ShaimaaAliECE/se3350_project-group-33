import react, { useEffect } from "react";
import React, { useState } from 'react';
import "./Components.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CSSTransition} from "react-transition-group";
import {Container} from "react-bootstrap";

import TutNumComponent from "./TutNumComponent";
import TutorialArrayComponent from "./TutorialArrayComponent";


function Tutorial () {

    const[tutorialText, setTutorialText] = useState("You’ve selected the merge sort algorithm.")
    const[step, setStep] = useState(0);


    //Populate tutorial Numbers
    var tempTutorialNumbers = [];
    for(var i = 0; i < 10; i++){
        const tempNumber = Math.floor(Math.random() * 10) + 1
        tempTutorialNumbers.push(tempNumber);
    }

    const[tutorialNumbers, setTutorialNumbers] = useState(tempTutorialNumbers);
    

        //TEST VARIABLE
        var tester = "";
        var tester1 = "";
        //

    //Set up tutorial numbers
    //var tutorialNumbers = [];

    //TEST
    for(var i = 0; i < tempTutorialNumbers.length; i++){
        tester1 +=  "," + tutorialNumbers[i].toString();
    }
    tester = tempTutorialNumbers.length

    // setTutorialNumbers(tempTutorialNumbers);

    // THOUGHT PROCESS
    //Store random 10 numbers and pass it to tutiral arrauy builder
    //recognize array im builder
    //boxes dissappear in right order
    //


    //

    //Layers
    //const[layer1,  setLayer1] = useState({show :true}); //Display Layers
    const[ layer1Content , setLayer1Content] = useState(TutorialArrayComponent(tutorialNumbers,"A","s6",10)); //Visual Content

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
                setLayer2Content(TutorialArrayComponent(tutorialNumbers,"A","s4",5,"s4",5));
                setLayer3(false);
                setLayer4(false);
                setLayer5(false);
                break;

            case 2:
                setTutorialText("Then the left sublist is further divided until it only contains one value.")
                setLayer2(true);

                setLayer3(true);
                setLayer3Content(TutorialArrayComponent(tutorialNumbers,"A","s2",3,"s2",2));

                setLayer4(true);
                setLayer4Content(TutorialArrayComponent(tutorialNumbers,"A",2,"s",1));
                
                setLayer5(true)
                setLayer5Content(TutorialArrayComponent(tutorialNumbers,"A",1,"s",1));
                break;

            case 3:
                setTutorialText("Then you compare the two leftmost values and add the smaller value into a new array of size 2 followed by the larger value.")
                setLayer2(true);
                setLayer3(true);
                setLayer4(true);
                setLayer5Content(TutorialArrayComponent("D",1,"s",1));
                setLayer5(true)
                break;
            
            case 4:
                setTutorialText("Do this with all the remaining solo values on the left side.")
                setLayer2(true);
                setLayer3(true);
                setLayer4(true);
                setLayer4Content(TutorialArrayComponent(tutorialNumbers,"A",2,"s",1,"s3",1,"s",1));
                setLayer5(true);
                break;

            case 5:
                setTutorialText("Then merge the array of size 2. This is done by checking which of the two arrays has the smaller first value. The smallest value is added to the new array.")
                setLayer2(true);

                setLayer3(true);
                setLayer3Content(TutorialArrayComponent(tutorialNumbers,"A","s2",3,"s2",2));

                setLayer4(true);
                setLayer4Content(TutorialArrayComponent("D",2,"s",1,"s3",1,"s",1));

                setLayer5(false);
                break;

            case 6:
                setTutorialText("This process is repeated until the new array contains all the values from the two smaller ones.")
                setLayer2(true);
                setLayer3(true);
                setLayer3Content(TutorialArrayComponent("D","s2",3,"s2",2));
                setLayer4(false);
                setLayer5(false);
                break;

            case 7:
                setTutorialText("Once the entire left side is done, you can begin the process over again to sort the right side.")
                setLayer2(true);
                setLayer3(true);

                setLayer3Content(TutorialArrayComponent(tutorialNumbers,"A","s12",3,"s2",2));
                setLayer4(true);
                setLayer4Content(TutorialArrayComponent(tutorialNumbers,"A","s11",2,"s",1,"s2",1,"s",1)); 
                setLayer5(true);
                setLayer5Content(TutorialArrayComponent(tutorialNumbers,"A","s10",1,"s",1));
                break;

            case 8:
                setTutorialText("Once the left and right side are sorted, perform one final combination of the two arrays to form the final sorted array. ")
                //setLayer5(false);
                //setLayer4(false);
                setLayer3Content(TutorialArrayComponent("D","s12",3,"s2",2));

                //setLayer3(false);
                setLayer4Content(TutorialArrayComponent("D","s11",2,"s",1,"s2",1,"s",1)); 

                //setLayer2(false);
                setLayer5Content(TutorialArrayComponent("D","s10",1,"s",1));

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
                            {layer1Content}
                        </ul>
                    </div>
                    <br></br>

                    <div className="layer2">
                    <CSSTransition
                    in={layer2}
                    //timeout={400}
                    classNames = "numberList"
                    unmountOnExit /*when the element disappears, it’s actually going to leave the DOM*/
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
                    //timeout={layer3Timeout}
                    classNames = "numberList"
                    unmountOnExit/*when the element disappears, it’s actually going to leave the DOM*/
                    //appear
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
                    //timeout={layer4Timeout}
                    classNames = "numberList"
                    unmountOnExit/*when the element disappears, it’s actually going to leave the DOM*/
                    //appear
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
                    //timeout={layer5Timeout}
                    classNames = "numberList"
                    unmountOnExit/*when the element disappears, it’s actually going to leave the DOM*/
                    //appear
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