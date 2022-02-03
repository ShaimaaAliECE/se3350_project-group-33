import react, { useEffect } from "react";
import React, { useState } from 'react';
import "./Components.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CSSTransition} from "react-transition-group";
import {Container} from "react-bootstrap";


function Tutorial () {

    // state = {
    //     layer1 : {tutorialText: null},
    //     layer2 : {tutorialText: "This algorithm works by dividing the full list of values into two equally sized sublists."},
    //     layer3 : {tutorialText: null},
    //     layer4 : {tutorialText: null},
    //     layer5 : {tutorialText: null},
    // };

    const[tutorialText, setTutorialText] = useState("This algorithm works by dividing the full list of values into two equally sized sublists.")
    const[step, setStep] = useState(1);
    const[showAnimation, setShowAnimation] = useState([])

    //Layers Enabled
    const[layer2,  setLayer2] = useState(true);
    const[layer3,  setLayer3] = useState(true);
    const[layer4,  setLayer4] = useState(true);
    const[layer5,  setLayer5] = useState(true);
    

    useEffect(() => {
        
    });

    
        return(
            <div className="container">

                <div className="tutorialText"> 
                    <h4>{tutorialText}</h4>
                </div>

                <div><p>{step}</p></div>

                <div className="tutoialDisplay">
                    <div className="layer1">
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
                    <br></br>

                    <div className="layer2">
                    <CSSTransition
                    in={layer2}
                    timeout={400}
                    classNames = "numberContainer"
                    unmountOnExit /*when the element disappears, it’s actually going to leave the DOM*/
                    >
                        <ul>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                        </ul>

                    </CSSTransition>
                    </div>
                    <br></br>

                    <div className="layer3">
                    <CSSTransition
                    in={layer3}
                    timeout={400}
                    classNames = "numberContainer"
                    unmountOnExit
                    >
                        <ul>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                        </ul>

                    </CSSTransition>
                    </div>
                    <br></br>

                    <div className="layer4">
                    <CSSTransition
                    in={layer4}
                    timeout={400}
                    classNames = "numberContainer"
                    unmountOnExit
                    >

                        <ul>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
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
                    unmountOnExit
                    >
                        <ul>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                            <li>
                            <Container style={{
                            width: 50, height: 50, backgroundColor: 'powderblue'}}>
                            {Math.floor(Math.random() * 10)+1}
                            </Container>
                            </li>
                        </ul>
                    </CSSTransition>
                    </div>
                </div>  

                <br></br>
                <button className="prevBtn" onClick ={() => setLayer2(false)}>
                    Prev
                </button>
                <button className="nextBtn" onClick={() => setLayer2(true)}>
                    Next
                </button>
    
            </div>
        );
    
}

export default Tutorial; 