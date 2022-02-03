import react from "react";
import React, { useState } from 'react';
import "./Components.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";


function Tutorial () {

    // state = {
    //     layer1 : {tutorialText: null},
    //     layer2 : {tutorialText: "This algorithm works by dividing the full list of values into two equally sized sublists."},
    //     layer3 : {tutorialText: null},
    //     layer4 : {tutorialText: null},
    //     layer5 : {tutorialText: null},
    // };

    const[layer,  setLayer] = useState(1);
    const[tutorialText, setTutorialText] = useState("This algorithm works by dividing the full list of values into two equally sized sublists.") 


    
        return(
            <div className="container">
                
                <div className="tutorialText"> 
                    <h4>{tutorialText}</h4>
                </div>

                <div className="tutoialDisplay">

                    <ul className="numberList">
                        <li>
                            <div>
                                <Container style={{
                                width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Container style={{
                                width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Container style={{
                                width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Container style={{
                                width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Container style={{
                                width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Container style={{
                                width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Container style={{
                                width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Container style={{
                                width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Container style={{
                                width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Container style={{
                                width: 50, height: 50, backgroundColor: 'powderblue'}}>
                                {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>
                        </li>
                    </ul>

                </div>   
                
                <button className="prevBtn" >
                    Prev
                </button>
                <button className="nextBtn" >
                    Next
                </button>
    
            </div>
        );
    
}

export default Tutorial; 