import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import "./Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import {CSSTransition} from "react-transition-group";
import TutNumComponent from "./TutNumComponent";

//Create visual array display as list components
//First String is Appear or dissapear transistion
//I typically go (1,"s",1) ; "s" as spacer
function TutorialArrayComponent(props){
    const arrayContent = [];
    const tempClassCheck =  [];

    //const [tutorialNumbers , setTutorialNumbers] = useState(props.itutorialNumbers)
    
    const renderSpace =  (idCounter) => (<li id = {idCounter}> <Container style={{width: 50, height: 50}}></Container></li>); 

    //CSS variables
    var tempClassname = "numberDisappear";
    var showNum =  true;
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
    function isRight(){


        return true;
    }  
    var sideCheck = 0; //determine if its on the left or right
    if(totalArrayCounter <= props.itutorialNumbers.length/2 && totalDisplayCounter > 11){
        sideCheck = 5;
    }
    else{
        sideCheck = 0;
    }



    function onlyRight(){
    }

    //TEST VARIABLE
    var tester ="";



    //Make box dissappear or apear based on input (A D)
    if(arguments[1]==="A"){
        tempClassname = "numberAppear";
        delayTime =  400;
    }
    else{
        if(arguments[1].includes("D")){
            tempClassname = "numberDisappear";
            showNum = false;
            delayTime = 400;
        }
    }

    //Store id order of animations in array
    var tempMin = 10;
    for (var i = 0; i < arguments[0].length; i++){
       
        if (arguments[0][i] > tempMin ){
            tempMin = arguments[0][i];
        }
        
        tempClassCheck.push(arguments[0][i]);
        
        tester += arguments[0][i].toString();

        // if(typeof(arguments[i]) === 'string' && arguments[i]>1 && arguments[i].includes("D")){
        //     tempClassCheck.push(parseInt(arguments[i].slice(1,arguments[1].length)));
        // }
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
                    // <CSSTransition

                    // in={displayNum}
                    // timeout={delayTime}
                    
                    // classNames = {tempClassname}
                    // id = {idCounter}
                    // //transitionDelay = {delayTime}
                    // unmountOnExit /*when the element disappears, it’s actually going to leave the DOM*/
                    // appear
                    // enter = {true}
                    // >   
                    //     <li>
                    //     {renderNumComponent(arguments[0][sideCheck])}
                    //     {/* {renderNumComponent(tester)} */}
                    //     </li>
                    // </CSSTransition>

                    //TutNumComponent(itutorialNumbers[sideCheck],tempClassname,idCounter)
                    <TutNumComponent inumber = {props.itutorialNumbers[sideCheck]} itempClassname = {tempClassname} iidCounter = {idCounter} ishowNum = {showNum} />
                )

                //Delay timeout if found in animation array
                delayTime+=200; 
               idCounter++;
               sideCheck++;
            }
        }
        
        //add single space if a number isnt received "s"
        else{

        }
    }
    return(arrayContent);
}

export default TutorialArrayComponent;