import react, { useEffect } from "react";
import React, { useState } from "react";
import "./Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition } from "react-transition-group";

import TutorialArrayComponent from "./TutorialArrayComponent";




function TutorialArray() {

  var tempTutorialNumbers = [];
  for(var i = 0; i < 10; i++){
      const tempNumber = Math.floor(Math.random() * 10) + 1
      tempTutorialNumbers.push(tempNumber);
  }

  const [tutorialNumbers, setTutorialNumbers] = useState(tempTutorialNumbers);

  const [layer1Content, setLayer1Content] = useState(
    TutorialArrayComponent(tutorialNumbers,"A","s6", 10,"s7")
  ); //Visual Content
  const [layer2Content, setLayer2Content] = useState(
    TutorialArrayComponent(tutorialNumbers,"A","s3", 5, "s6", 5)
  ); //Visual Content
  const [layer3Content, setLayer3Content] = useState(
    TutorialArrayComponent(tutorialNumbers,"A","s2",3,"s",2,"s5",3,"s",2 )
  ); //Visual Content
  const [layer4Content, setLayer4Content] = useState(
    TutorialArrayComponent(tutorialNumbers,"A","s",2,"s",1,"s",1,"s",1,"s3",2,"s",1,"s",1,"s",1)
  ); //Visual Content
  const [layer5Content, setLayer5Content] = useState(
    TutorialArrayComponent(tutorialNumbers,"A",1,"s", 1, "s8",1,"s",1)
  ); //Visual Content

  let animation =  [{layer:"", block:[]}] ; 



    function animate(animation) {
        let timeout = 400;
     
            for(let i = 0; i < arguments.length; i++){
                
                //First element of each Animation
                switch (arguments[i].layer){
                    default:
                    console.log("error");
                    break;
            
                    case "L1":
                    setLayer1Content(15);
                    break;
            
                    case "L2":
                    setLayer2Content();
                    break;
            
                    case "L3":
                    setLayer3Content();
                    break;
            
                    case "L4":
                    setLayer4Content();
                    break;
            
                    case "L5":
                    setLayer5Content();
                    break;
                }
            }
      }

    useEffect(() => {

    });

  return (
    <div className="container">
      <br></br>
      <div className="layer1">{layer1Content}</div>
      <br></br>
      <div className="layer2">{layer2Content}</div>
      <br></br>
      <div className="layer3">{layer3Content}</div>
      <br></br>
      <div className="layer4">{layer4Content}</div>
      <br></br>
      <div className="layer5">{layer5Content}</div>
      <br></br>
    </div>
  );
}

export default TutorialArray;


