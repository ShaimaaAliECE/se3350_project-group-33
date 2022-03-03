import React, {useState} from "react";
import {Container} from "react-bootstrap";
import "./Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import {CSSTransition} from "react-transition-group";
import TutNumComponent from "./TutNumComponent";

//Create visual array display as list components
//First String is Appear or dissapear transistion
//I typically go (1,"s",1) ; "s" as spacer
function TutorialArrayComponent(){
    const arrayContent = [];
    const tempClassCheck =  [];
    const renderSpace =  (idCounter) => (<li id = {idCounter}> <Container style={{width: 50, height: 50}}></Container></li>); 
    const renderNumComponent = (numberContnent) =>(
    <Container
        style={{
            width: 50,
            height: 50,
            backgroundColor: "powderblue",
            border: '1px solid'
        }}
    >
    {/* {arguments[0][idCounter]} */}
    {numberContnent}
    </Container>  
    )
    

    //CSS variables
    var tempClassname = "numberDisappear";
    var displayNum =  true;
    var idCounter = 0;
    var delayTime =  400;

    //get total size of displayed array
    //get total displayed blocks
    var totalArrayCounter = 0;
    var totalDisplayCounter = 0;
    for (let i = 0; i < arguments.length; i++){
        if(typeof(arguments[i]) === 'number'){
            totalDisplayCounter += arguments[i];
            totalArrayCounter += arguments[i];

        }
        else if(typeof(arguments[i]) === 'string' && arguments[i].length > 1 && i != 0){

            const tempArguement = parseInt(arguments[i].slice(1,arguments[i].length));
            
            totalDisplayCounter += tempArguement;
        }
        else{
            if (arguments[i]== "s"){
                totalDisplayCounter++;
            }
        }
    }

    //check for right side
    // var sideCheck = 0; //determine if its on the left or right
    // if(totalArrayCounter >5 && totalDisplayCounter > 11){
    //     //sideCheck = 5;
    //     arguments[0] = arguments[0].splice(5,10);
    // }
    // else{
    //     sideCheck = 0;
    // }

    //TEST VARIABLE
    var tester = totalArrayCounter;

    //add tutorial numbers to use as reference
    // if (arguments[0].constructor === Array){
    //     //tutorialNumbers = arguments[0];
    //     tester =  "true";
    // }

    //Make box dissappear or apear based on input (A D)
    if(arguments[1]==="A"){
        tempClassname = "numberAppear";
        delayTime =  400;
    }
    else{
        if(arguments[0].includes("D")){
            tempClassname = "numberDisappear";
            displayNum = false;
            delayTime = 400;
        }
    }

        //Store id order of animations in array
        for (var i = 0; i < arguments.length; i++){
            if(typeof(arguments[i]) === 'string' && arguments[i]>1 && arguments[i].includes("D")){
                tempClassCheck.push(parseInt(arguments[i].slice(1,arguments[1].length)));
            }
        }


    
    //Loop builder to create array display
    for (var i = 0; i < arguments.length; i++){

        //add number of spaces provided "s#" so "s3"
        if(typeof(arguments[i]) === 'string' && arguments[i].length > 1 && i != 0){

            const tempArguement = parseInt(arguments[i].slice(1,arguments[i].length));
            
            for (let index = 0; index < tempArguement; index++){
                arrayContent.push(
                    renderSpace("space")
                )
            }
        }

        //Build with single s
        else if (arguments[i]== "s"){
                arrayContent.push(
                //     <li>
                //     <Container style={{
                //         width: 50, height: 50}}>
                //     </Container>
                // </li>
                renderSpace("space")

                )
        }

    // add array size if provided number
        else if (typeof(arguments[i]) === 'number'){
            for (let index = 0; index < arguments[i]; index++){


                //Check for id box in anamation array
                // if(tempClassCheck.includes(idCounter)){
                //     delayTime = 400 * tempClassCheck.indexOf(idCounter);
                // }

                arrayContent.push(
                    <CSSTransition

                    in={displayNum}
                    timeout={delayTime}
                    
                    classNames = {tempClassname}
                    id = {idCounter}
                    //transitionDelay = {delayTime}
                    unmountOnExit /*when the element disappears, it’s actually going to leave the DOM*/
                    appear
                    enter = {true}
                    >   
                        <li>
                        {renderNumComponent(arguments[0][idCounter])}
                        {/* {renderNumComponent(tester)} */}
                        </li>
                    </CSSTransition>
                )

                //Delay timeout if found in animation array
                delayTime+=200; 
               idCounter++;
            }
        }
        
        //add single space if a number isnt received "s"
        else{

                //tester += "f";
                // arrayContent.push(
                //     <li>
                //     <Container style={{
                //         width: 50, height: 50}}>
                //     </Container>
                // </li>
                // )

        }
    }
    return(arrayContent);
}

export default TutorialArrayComponent;