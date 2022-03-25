import react, { useEffect } from "react";
import React, { useState } from 'react';
import "./Components.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CSSTransition} from "react-transition-group";
import {Container} from "react-bootstrap";

import TutNumComponent from "./TutNumComponent";
import TutorialArray from "./TutorialArray";
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
        //var tester = mergeSort(tutorialNumbers);

        var tester1 = "";
        //
    for(var i = 0; i < tempTutorialNumbers.length; i++){
        tester1 +=  "," + tutorialNumbers[i].toString();
    }
    //


    var sortedLeft = [];
    var sortedRight = [];
    const[sortedLeft, setSortedLeft] = useState([]);
    const[sortedRight, setSortedRight] = useState([]);

    function mergeSort(array){

        if (array.length === 1) {
            return array                            // return once we hit an array with a single item
         }
    
         const middle = Math.floor(array.length / 2) // get the middle item of the array rounded down
         const left = array.slice(0, middle)         // items on the left side
         setSortedLeft(left);
         const right = array.slice(middle)   
         setSortedLeft(right);

         return merge(
            mergeSort(left),
            mergeSort(right)
         )
    
    }
    
    function merge (left, right) {
        let result = []
        let leftIndex = 0
        let rightIndex = 0
        while (leftIndex < left.length && rightIndex < right.length) {
           if (left[leftIndex] < right[rightIndex]) {
           result.push(left[leftIndex])
           leftIndex++   
           } else {
           result.push(right[rightIndex])
           rightIndex++      
        }
     }
     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
     }

    const[sortedArray, setSortedArray] = useState(mergeSort(tutorialNumbers));
    const[tutArray, setTutArrayArray] = useState(tempTutorialNumbers);

    //Layers
    const[layer1,  setLayer1] = useState({show :true}); //Display Layers
    const[ layer1Content , setLayer1Content] = useState(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {["s6", 10,"s7"]} itempClassName = {"numberAppear"}/>); //Visual Content
    //TutorialArrayComponent(tutorialNumbers,"A","s6", 10,"s7")


    const[layer2,  setLayer2] = useState({show :false}); //Display Layers
    const[ layer2Content , setLayer2Content] = useState([]); //Visual Content

    const[layer3,  setLayer3] = useState({show :false}); //Display Layers
    const[ layer3Content , setLayer3Content] = useState([]); //Visual Content

    const[layer4,  setLayer4] = useState({show :false}); //Display Layers
    const[ layer4Content , setLayer4Content] = useState([]); //Visual Content

    const[layer5,  setLayer5] = useState({show :false}); //Display Layers
    const[ layer5Content , setLayer5Content] = useState([]); //Visual Content
    //<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {[1,"s", 1, "s8",1,"s",1]} itempClassName = {"numberAppear"}/>


    //Animations for each steps
    useEffect(() => {

        switch(step){
            default:
                setTutorialText("You’ve selected the merge sort algorithm.");
                setTutorialNumbers(tutArray);
                setLayer2(false);
                setLayer3(false);
                setLayer4(false);
                setLayer5(false);
                setStep(0);
                break;

            case 1:
                setTutorialText("This algorithm works by dividing the full list of values into two equally sized sublists.");
                setTutorialNumbers(tutArray);
                setLayer1Content(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {["s6", 10,"s7"]} itempClassName = {"numberDisappear"}/>);
                setLayer2(true);
                setLayer2Content(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {["s3", 5, "s6", 5]} itempClassName = {"numberAppear"}/>);
                setLayer3(false);
                setLayer4(false);
                setLayer5(false);  
                break;

            case 2:
                setTutorialText("Then the left sublist is further divided until it only contains one value.")
                setTutorialNumbers(tutArray);
                setLayer2(true);
                setLayer2Content(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {["s3", 5, "s6", 5]} itempClassName = {"numberAppear"}/>);

                setLayer3(true);
                setLayer3Content(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {["s2",3,"s",2]} itempClassName = {"numberAppear"}/>);

                setLayer4(true);
                setLayer4Content(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {["s",2,"s",1]} itempClassName = {"numberAppear"}/>);
                
                setLayer5(true);
                setLayer5Content(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {[1,"s",1]} itempClassName = {"numberAppear"}/>)

                //setLayer5Content(TutorialArrayComponent(tutorialNumbers,"A",1,"s",1));
            break;

            case 3:
                setTutorialText("Then you compare the two leftmost values and add the smaller value into a new array of size 2 followed by the larger value.")
                setLayer2(true);
                setLayer3(true);
                setLayer4(true);
                //setLayer5Content(TutorialArrayComponent(tutorialNumbers,"D",1,"s",1));
                setLayer5Content(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {[1,"s",1]} itempClassName = {"numberDisappear-exit-active"}/>)
                setLayer5(true)
                break;
            
            case 4:
                setTutorialText("Do this with all the remaining solo values on the left side.")
                setLayer2(true);
                setLayer3(true);
                setLayer4(true);
                setLayer4Content(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {["s",2,"s",1,"s",1,"s",1]} itempClassName = {"numberAppear"}/>);
                setLayer5(false);
                break;

            case 5:
                setTutorialText("Then merge the array of size 2. This is done by checking which of the two arrays has the smaller first value. The smallest value is added to the new array.")
                setLayer2(true);

                setLayer3(true);
                setLayer3Content(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {["s2",3,"s",2]} itempClassName = {"numberAppear"}/>);

                //setLayer3Content(TutorialArrayComponent(tutorialNumbers,"A","s2",3,"s2",2));
                setLayer4(true);
                setLayer4Content(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {["s",2,"s",1,"s",1,"s",1]} itempClassName = {"numberDisappear"}/>);
                //setLayer4Content(TutorialArrayComponent("D",2,"s",1,"s3",1,"s",1));

                setLayer5(false);

                break;

            case 6:
                setTutorialText("This process is repeated until the new array contains all the values from the two smaller ones.")
                setLayer2(true);
                setLayer2Content(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {["s3", 5, "s6", 5]} itempClassName = {"numberAppear"}/>);
                setLayer3(true);
                //setLayer3Content(TutorialArrayComponent("D","s2",3,"s2",2));
                setLayer4(false);
                setLayer5(false);
                break;

            case 7:
                setTutorialText("Once the entire left side is done, you can begin the process over again to sort the right side.")
                setLayer2(true);
                setLayer3(true);

                //setLayer3Content(TutorialArrayComponent(tutorialNumbers,"A","s12",3,"s2",2));
                setLayer3Content(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {["s13",3,"s",2]} itempClassName = {"numberAppear"}/>);

                setLayer4(true);
                //setLayer4Content(TutorialArrayComponent(tutorialNumbers,"A","s11",2,"s",1,"s2",1,"s",1));
                setLayer4Content(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {["s12",2,"s",1,"s",1,"s",1]} itempClassName = {"numberAppear"}/>); 
 
                setLayer5(true);
                setLayer5Content(<TutorialArray itutorialNumbers = {tutorialNumbers} ibuildArray =  {["s11",1,"s",1]} itempClassName = {"numberAppear"}/>);

                //setLayer5Content(TutorialArrayComponent(tutorialNumbers,"A","s11",1,"s",1));
                break;

            case 8:
                setTutorialText("Once the left and right side are sorted, perform one final combination of the two arrays to form the final sorted array. ")
                //setLayer5(false);
                //setLayer4(false);
                //setLayer3Content(TutorialArrayComponent("D","s12",3,"s2",2));

                //setLayer3(false);
                //setLayer4Content(TutorialArrayComponent("D","s11",2,"s",1,"s2",1,"s",1)); 

                //setLayer2(false);
                //setLayer5Content(TutorialArrayComponent("D","s10",1,"s",1));

                break;
            
        }
    },[step,tutorialNumbers,tutArray,sortedArray]);
    
        return(
            <div className="container">
                <div className="tutorialText"> 
                    <h6>{step}){sortedArray}){tutArray}){tutorialText}</h6>
                </div>
                <div className="tutoialDisplay">
                <CSSTransition in={layer1} classNames="layer" timeout = {200}>
                <div className="layer1"><ul>{layer1Content}</ul></div>
                </CSSTransition>
                <br></br>
                <CSSTransition in={layer2} classNames="layer" timeout = {200}>
                <div  className="layer2Content"><ul>{layer2Content}</ul></div>
                </CSSTransition>
                <br></br>
                <CSSTransition in={layer3} classNames="layer" timeout = {200}>
                <div className="layer3"><ul>{layer3Content}</ul></div>
                </CSSTransition>
                <br></br>
                <CSSTransition in={layer4} classNames="layer" timeout = {200}>
                <div className="layer4"><ul>{layer4Content}</ul></div>
                </CSSTransition>
                <br></br>
                <CSSTransition in={layer5} classNames="layer" timeout = {200}>
                <div className="layer5"><ul>{layer5Content}</ul></div>
                </CSSTransition>
                <br></br>
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