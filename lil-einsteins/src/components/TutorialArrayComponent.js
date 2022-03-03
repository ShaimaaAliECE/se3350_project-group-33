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

    //component variable
    var tempClassname = "numberDisappear";
    var displayNum =  true;

    if(arguments[0]==="A"){
        tempClassname = "numberAppear";
    }
    else{
        if(arguments[0]==="D"){
            tempClassname = "numberDisappear";
            displayNum = false;
        }
    }

    var delayTime =  400;
    // add array size if provided number
    for (var i = 0; i < arguments.length; i++){


        if (typeof(arguments[i]) === 'number'){
            for (let index = 0; index < arguments[i]; index++){

                arrayContent.push(
                    <CSSTransition

                    in={displayNum}
                    timeout={delayTime}
                    
                    classNames = {tempClassname}
                    //transitionDelay = {delayTime}
                    unmountOnExit /*when the element disappears, it’s actually going to leave the DOM*/
                    appear
                    enter = {true}
                    >   
                        <li>
                        <TutNumComponent></TutNumComponent>
                        </li>
                    </CSSTransition>
                )

                //increment timer
                delayTime += 400;
            }
        }
        //add number of spaces provided "s#" so "s3"
        else if(arguments[i].length > 1 && typeof(arguments[i]) === 'string' && arguments[i] !== "A" &&  arguments[i] !== "D" ){
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

export default TutorialArrayComponent;