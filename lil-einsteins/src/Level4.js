import { useState, useCallback } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { Box } from "./Components/DraggableBox";
import { Container } from "./Components/Container";
import infoIcon from "./images/icons8-info.png";
import nextIcon from "./images/icons8-next.png";
import randomizeNewArray from "./Components/GenerateNumbers";
import {ItemTypes} from "./Components/ItemTypes";
import NavbarComponent from "./Components/NavbarComponent";
import Timer from "./Components/Timer";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const numbers = randomizeNewArray(20, 50); //generates a new array with 20 values ranging 1-50

let tempArray = numbers.slice(); //duplicates the array

{/* method for shuffling the array */}
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) { //loop over the length of the array
		const j = Math.floor(Math.random() * (i + 1)); //generate a random number between 0 and i
		const temp = array[i]; //temporarily store the index i of the array
		array[i] = array[j]; //set index i of the array to index j
		array[j] = temp; //sets index j to index i
	}
	return array; //return the array
};

const unsorted = shuffleArray(tempArray); //stores the unsorted array

//loads each value into a box
const Level4 = () => {
	const boxDetails = [
		{name: `${unsorted[0]}`, type: ItemTypes.BOX},	//first value
		{name: `${unsorted[1]}`, type: ItemTypes.BOX},	//second value
		{name: `${unsorted[2]}`, type: ItemTypes.BOX},	//.
		{name: `${unsorted[3]}`, type: ItemTypes.BOX},	//.
		{name: `${unsorted[4]}`, type: ItemTypes.BOX},	//.
		{name: `${unsorted[5]}`, type: ItemTypes.BOX},	//.
		{name: `${unsorted[6]}`, type: ItemTypes.BOX},	//.	
		{name: `${unsorted[7]}`, type: ItemTypes.BOX},	//.
		{name: `${unsorted[8]}`, type: ItemTypes.BOX},	//.
		{name: `${unsorted[9]}`, type: ItemTypes.BOX},	//.
		{name: `${unsorted[10]}`, type: ItemTypes.BOX},	//.	
		{name: `${unsorted[11]}`, type: ItemTypes.BOX},	//.
		{name: `${unsorted[12]}`, type: ItemTypes.BOX},	//.
		{name: `${unsorted[13]}`, type: ItemTypes.BOX},	//.
		{name: `${unsorted[14]}`, type: ItemTypes.BOX},	//.
		{name: `${unsorted[15]}`, type: ItemTypes.BOX},	//.
		{name: `${unsorted[16]}`, type: ItemTypes.BOX},	//.
		{name: `${unsorted[17]}`, type: ItemTypes.BOX},	//.
		{name: `${unsorted[18]}`, type: ItemTypes.BOX},	//ninteenth value
		{name: `${unsorted[19]}`, type: ItemTypes.BOX}	//twenthieth value
	];

	const [boxes] = useState(boxDetails);
	const [droppedBoxNames] = useState([]);

	function isDropped(boxName) {
		return droppedBoxNames.indexOf(boxName) > -1;
	}

	//halfs of the array used for easier calculations later
	const half = numbers.length / 2;
	const firstHalf = half / 2;
	const secondHalf = firstHalf / 2;

  const [nextArray, setNextArray] = useState(1);
  const [solved, setSolved] = useState(false);

	const [showNextElement, setShowNextElement] = useState(0);

  const navigate = useNavigate();
  const handleLevelChange = useCallback(
    () => navigate("/Level5", { replace: true }),
    [navigate]
  );

  return (
    <div>
      <NavbarComponent level="Level4" />
      <Timer />
      <DndProvider backend={HTML5Backend}>
        <div className="z-10 fixed bottom-0 bg-red-600 py-6  left-0 right-0 flex gap-1 justify-center">
          {boxes.map(({ name, type }, index) => (
            //loading the boxes onto the screen
            <Box
              name={name}
              type={type}
              isDropped={isDropped(name)}
              key={index}
            />
          ))}
          <Button
            disabled={!solved}
            variant="primary"
            onClick={() => handleLevelChange()}
          >
            Next Level
          </Button>
        </div>
      </DndProvider>

      <img
        onClick={() => {
          setNextArray(nextArray + 1);
          if (nextArray >= 11) setSolved(true);
        }}
        src={nextIcon}
        className="z-10 fixed top-1/3 rotate-90 cursor-pointer left-16"
      />

			{nextArray >= 12 && (
				<div className=" ">
					{showNextElement > 1}
					{showNextElement <= 20}
				</div>
			)}

			{/* css for the first 5 text lines of the level */}
			<div className="w-full mb-5 flex items-center flex-col">
				<a href="/Level4">
					<div className=" p-4 rounded-xl mt-2 bg-cyan-600 text-white">
						Generate New Random Array
					</div>
				</a>

				<p className=" w-max text-white p-2 rounded-xl bg-slate-500 m-2">
					Read this first:
				</p>
				<p className="w-max flex items-center bg-blue-200 rounded-xl p-2 m-2">
					{" "}
					<img src={infoIcon} width="30px" height="10px" alt="" /> You can drag
					elements from bottom black box of the screen
				</p>
				<p className=" w-max  p-2 rounded-xl bg-blue-200 m-2">Initial Array:</p>
				<p className=" w-max  p-2 rounded-xl bg-blue-200 m-2">
					Total elements = 20
				</p>
			</div>

      <div className="flex justify-center mb-40">
        {/* Displaying Initial Array */}
        <div className="flex border-black border-b-4 justify-center">
          {unsorted.map((number) => {
            return (
              <div
                key={number}
                className="bg-slate-300 border-r-2 border-white"
                style={{ width: "50px", height: "50px" }}
              >
                {number}
              </div>
            );
          })}
        </div>
      </div>

			<div className="w-full mb-10 flex items-center flex-col">
				{/* Middle Layer */}
				{2 <= nextArray && ( //first array split
					<DndProvider backend={HTML5Backend}>
						<div className="flex flex-col justify-center mt-20">
							{/* css for the text line immediately before the first array split */}
							<div className="flex  justify-center">
								<p className=" w-max p-2 rounded-xl bg-blue-200 m-2">
									Place the numbers in their respective boxes
								</p>
							</div>

							{/* css for the container holding all of the boxes */}
							<div
								className="flex justify-center flex-col"
								style={{position: "relative", width: "1000px", height: "54px"}}
							>
								<div className="flex justify-center w-full gap-8"> {/* determines the gap between arrays and centers them */}
									<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
										{unsorted.map((number, index) => { //assign the target values to the boxes
											return index < half ? ( //the first half of the array
												<Container shouldAccept={number} /> //the box should only accept its corresponding value
											) : (
												""
											);
										})}
									</div>

									<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
										{unsorted.map((number, index) => { //assign the target values to the boxes
											return index >= half ? ( //the second half of the array
												<Container shouldAccept={number} /> //the box should only accept its corresponding value
											) : (
												""
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</DndProvider>
				)}
			</div>

			<div className="w-full mt-5 mb-5 flex items-center flex-col">
				{/* Third Layer */}
				{3 <= nextArray && ( //second array split
					<DndProvider backend={HTML5Backend}>
						{/* css for the container holding all of the boxes */}
						<div
							className="flex justify-center flex-col"
							style={{position: "relative", width: "1000px", height: "54px"}}
						>
							<div className="flex justify-center w-full gap-8"> {/* determines the gap between arrays and centers them */}
								<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
									{unsorted.map((number, index) => { //assign the target values to the boxes
										return index < firstHalf ? ( //first half of the first half of the array
											<Container shouldAccept={number} /> //the box should only accept its corresponding value
										) : (
											""
										);
									})}
								</div>

								<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
									{unsorted.map((number, index) => { //assign the target values to the boxes
										return index >= firstHalf && index < half ? ( //second half of the first half
											<Container shouldAccept={number} /> //the box should only accept its corresponding value
										) : (
											""
										);
									})}
								</div>
								<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
									{unsorted.map((number, index) => { //assign the target values to the boxes
										return index >= half && index <= 14 ? ( //first half of the second half
											<Container shouldAccept={number} /> //the box should only accept its corresponding value
										) : (
											""
										);
									})}
								</div>
								<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
									{unsorted.map((number, index) => { //assign the target values to the boxes
										return index >= 15 ? ( //second half of the second half
											<Container shouldAccept={number} /> //the box should only accept its corresponding value
										) : (
											""
										);
									})}
								</div>
							</div>
						</div>
					</DndProvider>
				)}
			</div>

			<div className="w-full mb-5 flex items-center flex-col">
				{/* Fourth Layer */}
				{4 <= nextArray && ( //third array split
					<DndProvider backend={HTML5Backend}>
						{/* css for the container holding all of the boxes */}
						<div
							className="flex justify-center flex-col"
							style={{position: "relative", width: "1000px", height: "54px"}}
						>
							<div className="flex justify-center w-full gap-6"> {/* determines the gap between arrays and centers them */}
								<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
									{unsorted.map((number, index) => { //assign the target values to the boxes
										return index < secondHalf ? ( //boxex 0,1,2
											<Container shouldAccept={number} /> //the box should only accept its corresponding value
										) : (
											""
										);
									})}
								</div>

								<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
									{unsorted.map((number, index) => { //assign the target values to the boxes
										return index >= secondHalf && index < firstHalf ? ( //boxes 3,4
											<Container shouldAccept={number} /> //the box should only accept its corresponding value
										) : (
											""
										);
									})}
								</div>

								<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
									{unsorted.map((number, index) => { //assign the target values to the boxes
										return index >= firstHalf && index <= 7 ? ( //boxes 5,6,7
											<Container shouldAccept={number} /> //the box should only accept its corresponding value
										) : (
											""
										);
									})}
								</div>
								<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
									{unsorted.map((number, index) => { //assign the target values to the boxes
										return index >= 8 && index < half ? ( //boxes 8,9
											<Container shouldAccept={number} /> //the box should only accept its corresponding value
										) : (
											""
										);
									})}
								</div>

								<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
									{unsorted.map((number, index) => { //assign the target values to the boxes
										return index >= half && index <= 12 ? ( //boxes 10,11,12
											<Container shouldAccept={number} /> //the box should only accept its corresponding value
										) : (
											""
										);
									})}
								</div>

								<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
									{unsorted.map((number, index) => { //assign the target values to the boxes
										return index >= 13 && index <= 14 ? ( //boxes 13,14
											<Container shouldAccept={number} /> //the box should only accept its corresponding value
										) : (
											""
										);
									})}
								</div>

								<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
									{unsorted.map((number, index) => { //assign the target values to the boxes
										return index >= 15 && index <= 17 ? ( //boxes 15,16,17
											<Container shouldAccept={number} /> //the box should only accept its corresponding value
										) : (
											""
										);
									})}
								</div>
								<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
									{unsorted.map((number, index) => { //assign the target values to the boxes
										return index >= 18 ? ( //boxes 18,19
											<Container shouldAccept={number} /> //the box should only accept its corresponding value
										) : (
											""
										);
									})}
								</div>
							</div>
						</div>
					</DndProvider>
				)}
			</div>

			<div className="w-full flex items-center flex-col">
				{/* Fifth Layer */}
				{5 <= nextArray && ( //fourth and final array split
					<DndProvider backend={HTML5Backend}>
						<div className="flex gap-2.5 mb-5"> {/* determines the gap between arrays*/}
							<div className="flex items-center  gap-1 flex-col"> {/* css for the individual boxes */}
								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[0]} /> {/* the box should only accept its corresponding value*/ }
									<Container shouldAccept={unsorted[1]} /> {/* the box should only accept its corresponding value*/ }
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col"> {/* css for the individual boxes */}
								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[2]} /> {/* the box should only accept its corresponding value*/ }
									<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
										<Container shouldAccept={unsorted[3]} /> {/* the box should only accept its corresponding value*/ }
										<Container shouldAccept={unsorted[4]} /> {/* the box should only accept its corresponding value*/ }
									</div>
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col"> {/* css for the individual boxes */}
								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[5]} /> {/* the box should only accept its corresponding value*/ }
									<Container shouldAccept={unsorted[6]} /> {/* the box should only accept its corresponding value*/ }
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col"> {/* css for the individual boxes */}
								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[7]} /> {/* the box should only accept its corresponding value*/ }
									<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
										<Container shouldAccept={unsorted[8]} /> {/* the box should only accept its corresponding value*/ }
										<Container shouldAccept={unsorted[9]} /> {/* the box should only accept its corresponding value*/ }
									</div>
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col"> {/* css for the individual boxes */}
								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[10]} /> {/* the box should only accept its corresponding value*/ }
									<Container shouldAccept={unsorted[11]} /> {/* the box should only accept its corresponding value*/ }
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col"> {/* css for the individual boxes */}
								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[12]} /> {/* the box should only accept its corresponding value*/ }
									<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
										<Container shouldAccept={unsorted[13]} /> {/* the box should only accept its corresponding value*/ }
										<Container shouldAccept={unsorted[14]} /> {/* the box should only accept its corresponding value*/ }
									</div>
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col"> {/* css for the individual boxes */}
								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[15]} /> {/* the box should only accept its corresponding value*/ }
									<Container shouldAccept={unsorted[16]} /> {/* the box should only accept its corresponding value*/ }
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col"> {/* css for the individual boxes */}
								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[17]} /> {/* the box should only accept its corresponding value*/ }
									<div className="flex border-b-4 border-black"> {/* css for the individual boxes */}
										<Container shouldAccept={unsorted[18]} /> {/* the box should only accept its corresponding value*/ }
										<Container shouldAccept={unsorted[19]} /> {/* the box should only accept its corresponding value*/ }
									</div>
								</div>
							</div>
						</div>
					</DndProvider>
				)}
			</div>

      <div className="flex justify-center mb-2">
        {6 <= nextArray && (
          <div className="flex gap-2.5">
            {unsorted.map((number) => {
              return (
                <div
                  className="p-4 border-r-0 border-b-4 border-black bg-slate-300"
                  style={{ width: "50px", height: "50px" }}
                >
                  {number}
                </div>
              );
            })}
          </div>
        )}
      </div>

			<div className="w-full flex items-center flex-col">
				{6 <= nextArray && (
					<div className="flex justify-center items-center flex-col"> {/* css for text following atomized array */}
						<div className=" bg-blue-200 p-2 rounded-xl mb-4">
							We have successfully made the array atomic i.e. seperated each
							element out
						</div>

						<div className=" bg-blue-200 p-2 rounded-xl mb-2">
							We'll start merging them now :)
						</div>
					</div>
				)}
			</div>

      <DndProvider backend={HTML5Backend}>
        <div className="w-full mb-40 flex items-center flex-col">
          {7 <= nextArray && (
            <div className="flex justify-center gap-3">
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex">
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(0, 2).sort(function (a, b) {
                          return a - b;
                        })[0]
                      }
                    />
                  </div>

                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(0, 2).sort(function (a, b) {
                          return a - b;
                        })[1]
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex">
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(2, 4).sort(function (a, b) {
                          return a - b;
                        })[0]
                      }
                    />
                  </div>
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(2, 4).sort(function (a, b) {
                          return a - b;
                        })[1]
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex">
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(4, 6).sort(function (a, b) {
                          return a - b;
                        })[0]
                      }
                    />
                  </div>
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(4, 6).sort(function (a, b) {
                          return a - b;
                        })[1]
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex">
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(6, 8).sort(function (a, b) {
                          return a - b;
                        })[0]
                      }
                    />
                  </div>
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(6, 8).sort(function (a, b) {
                          return a - b;
                        })[1]
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex">
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(8, 10).sort(function (a, b) {
                          return a - b;
                        })[0]
                      }
                    />
                  </div>
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(8, 10).sort(function (a, b) {
                          return a - b;
                        })[1]
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex">
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(10, 12).sort(function (a, b) {
                          return a - b;
                        })[0]
                      }
                    />
                  </div>

                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(10, 12).sort(function (a, b) {
                          return a - b;
                        })[1]
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex">
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(12, 14).sort(function (a, b) {
                          return a - b;
                        })[0]
                      }
                    />
                  </div>
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(12, 14).sort(function (a, b) {
                          return a - b;
                        })[1]
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex">
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(14, 16).sort(function (a, b) {
                          return a - b;
                        })[0]
                      }
                    />
                  </div>
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(14, 16).sort(function (a, b) {
                          return a - b;
                        })[1]
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex">
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(16, 18).sort(function (a, b) {
                          return a - b;
                        })[0]
                      }
                    />
                  </div>
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(16, 18).sort(function (a, b) {
                          return a - b;
                        })[1]
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex">
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(18, 20).sort(function (a, b) {
                          return a - b;
                        })[0]
                      }
                    />
                  </div>
                  <div className="flex items-center flex-col">
                    <Container
                      shouldAccept={
                        unsorted.slice(18, 20).sort(function (a, b) {
                          return a - b;
                        })[1]
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

							<div className="flex flex-col gap-2 justify-center items-center"> {/* determines the gap between boxes*/}
								<div className="flex">
									<div className="flex items-center flex-col"> {/* css for the individual boxes */}
										<Container
											shouldAccept={
												unsorted.slice(18, 20).sort(function (a, b) { //the container should accept the first value of the sorted sliced array
													return a - b;
												})[0]
											}
										/>
										<span
											className={
												showNextElement == 7
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
									<div className="flex items-center flex-col"> 
										<Container
											shouldAccept={
												unsorted.slice(18, 20).sort(function (a, b) { //the container should accept the second value of the sorted sliced array
													return a - b;
												})[1]
											}
										/>
										<span
											className={
												showNextElement == 7
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
								</div>
							</div>
						</div>
					)}

					{8 <= nextArray && (
						<div className="flex justify-center mb-4 gap-4">
							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container
										shouldAccept={
											unsorted.slice(0, 4).sort(function (a, b) {
												return a - b;
											})[0]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 4).sort(function (a, b) {
												return a - b;
											})[1]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 4).sort(function (a, b) {
												return a - b;
											})[2]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 4).sort(function (a, b) {
												return a - b;
											})[3]
										}
									/>
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex  mt-2">
									<Container
										shouldAccept={
											unsorted.slice(4, 8).sort(function (a, b) {
												return a - b;
											})[0]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(4, 8).sort(function (a, b) {
												return a - b;
											})[1]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(4, 8).sort(function (a, b) {
												return a - b;
											})[2]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(4, 8).sort(function (a, b) {
												return a - b;
											})[3]
										}
									/>
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container
										shouldAccept={
											unsorted.slice(8, 12).sort(function (a, b) {
												return a - b;
											})[0]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(8, 12).sort(function (a, b) {
												return a - b;
											})[1]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(8, 12).sort(function (a, b) {
												return a - b;
											})[2]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(8, 12).sort(function (a, b) {
												return a - b;
											})[3]
										}
									/>
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex  mt-2">
									<Container
										shouldAccept={
											unsorted.slice(12, 16).sort(function (a, b) {
												return a - b;
											})[0]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(12, 16).sort(function (a, b) {
												return a - b;
											})[1]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(12, 16).sort(function (a, b) {
												return a - b;
											})[2]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(12, 16).sort(function (a, b) {
												return a - b;
											})[3]
										}
									/>
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2">
									<Container
										shouldAccept={
											unsorted.slice(16, 20).sort(function (a, b) {
												return a - b;
											})[0]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(16, 20).sort(function (a, b) {
												return a - b;
											})[1]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(16, 20).sort(function (a, b) {
												return a - b;
											})[2]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(16, 20).sort(function (a, b) {
												return a - b;
											})[3]
										}
									/>
								</div>
							</div>
						</div>
					)}

					{9 <= nextArray && (
						<div className="flex justify-center mb-4 gap-4">
							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container
										shouldAccept={
											unsorted.slice(0, 8).sort(function (a, b) {
												return a - b;
											})[0]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 8).sort(function (a, b) {
												return a - b;
											})[1]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 8).sort(function (a, b) {
												return a - b;
											})[2]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 8).sort(function (a, b) {
												return a - b;
											})[3]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 8).sort(function (a, b) {
												return a - b;
											})[4]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 8).sort(function (a, b) {
												return a - b;
											})[5]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 8).sort(function (a, b) {
												return a - b;
											})[6]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 8).sort(function (a, b) {
												return a - b;
											})[7]
										}
									/>
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container
										shouldAccept={
											unsorted.slice(8, 16).sort(function (a, b) {
												return a - b;
											})[0]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(8, 16).sort(function (a, b) {
												return a - b;
											})[1]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(8, 16).sort(function (a, b) {
												return a - b;
											})[2]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(8, 16).sort(function (a, b) {
												return a - b;
											})[3]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(8, 16).sort(function (a, b) {
												return a - b;
											})[4]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(8, 16).sort(function (a, b) {
												return a - b;
											})[5]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(8, 16).sort(function (a, b) {
												return a - b;
											})[6]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(8, 16).sort(function (a, b) {
												return a - b;
											})[7]
										}
									/>
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2">
									<Container
										shouldAccept={
											unsorted.slice(16, 20).sort(function (a, b) {
												return a - b;
											})[0]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(16, 20).sort(function (a, b) {
												return a - b;
											})[1]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(16, 20).sort(function (a, b) {
												return a - b;
											})[2]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(16, 20).sort(function (a, b) {
												return a - b;
											})[3]
										}
									/>
								</div>
							</div>
						</div>
					)}

					{10 <= nextArray && (
						<div className="flex justify-center mb-4 gap-6">
							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[0]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[1]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[2]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[3]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[4]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[5]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[6]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[7]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[8]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[9]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[10]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[11]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[12]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[13]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[14]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 16).sort(function (a, b) {
												return a - b;
											})[15]
										}
									/>
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2">
									<Container
										shouldAccept={
											unsorted.slice(16, 20).sort(function (a, b) {
												return a - b;
											})[0]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(16, 20).sort(function (a, b) {
												return a - b;
											})[1]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(16, 20).sort(function (a, b) {
												return a - b;
											})[2]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(16, 20).sort(function (a, b) {
												return a - b;
											})[3]
										}
									/>
								</div>
							</div>
						</div>
					)}

					{11 <= nextArray && (
						<div className="flex justify-center mb-12 gap-4">
							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[0]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[1]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[2]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[3]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[4]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[5]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[6]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[7]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[8]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[9]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[10]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[11]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[12]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[13]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[14]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[15]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[16]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[17]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[18]
										}
									/>
									<Container
										shouldAccept={
											unsorted.slice(0, 20).sort(function (a, b) {
												return a - b;
											})[19]
										}
									/>
								</div>
							</div>
						</div>
					)}
				</div>
			</DndProvider>
		</div>
	);
};

export default Level4;
