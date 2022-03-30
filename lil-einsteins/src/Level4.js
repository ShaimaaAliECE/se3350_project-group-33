import {useState} from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {Box} from "./Components/DraggableBox";
import {Container} from "./Components/Container";
import infoIcon from "./images/icons8-info.png";
import nextIcon from "./images/icons8-next.png";
import randomizeNewArray from "./Components/GenerateNumbers";
import {ItemTypes} from "./Components/ItemTypes";
import "bootstrap/dist/css/bootstrap.min.css";

const numbers = randomizeNewArray(20);

//loads values into the boxes
const Level4 = () => {
    const boxDetails = [
		{name: `${numbers[5]}`, type: ItemTypes.BOX},
		{name: `${numbers[0]}`, type: ItemTypes.BOX},
		{name: `${numbers[2]}`, type: ItemTypes.BOX},
		{name: `${numbers[9]}`, type: ItemTypes.BOX},
		{name: `${numbers[1]}`, type: ItemTypes.BOX},
		{name: `${numbers[8]}`, type: ItemTypes.BOX},
		{name: `${numbers[3]}`, type: ItemTypes.BOX},
		{name: `${numbers[6]}`, type: ItemTypes.BOX},
		{name: `${numbers[7]}`, type: ItemTypes.BOX},
		{name: `${numbers[4]}`, type: ItemTypes.BOX},
        {name: `${numbers[11]}`, type: ItemTypes.BOX},
		{name: `${numbers[15]}`, type: ItemTypes.BOX},
		{name: `${numbers[13]}`, type: ItemTypes.BOX},
		{name: `${numbers[19]}`, type: ItemTypes.BOX},
		{name: `${numbers[17]}`, type: ItemTypes.BOX},
		{name: `${numbers[10]}`, type: ItemTypes.BOX},
		{name: `${numbers[16]}`, type: ItemTypes.BOX},
		{name: `${numbers[12]}`, type: ItemTypes.BOX},
		{name: `${numbers[18]}`, type: ItemTypes.BOX},
		{name: `${numbers[14]}`, type: ItemTypes.BOX}
	];

    const [boxes] = useState(boxDetails);
	const [droppedBoxNames] = useState([]);

	function isDropped(boxName) {
		return droppedBoxNames.indexOf(boxName) > -1;
	}

    //halfs of the array
    const half = numbers.length / 2;
	const firstHalf = half / 2;
    const secondHalf = firstHalf / 2;

	const [nextArray, setNextArray] = useState(1);

	const [showNextElement, setShowNextElement] = useState(0);

    return (
		<div>
			<DndProvider backend={HTML5Backend}>
				<div className="z-10 fixed bottom-0 bg-red-600 py-6  left-0 right-0 flex gap-1 justify-center">
					{boxes.map(({name, type}, index) => (
                        //loading the boxes onto the screen
						<Box
							name={name}
							type={type}
							isDropped={isDropped(name)}
							key={index}
						/>
					))}
				</div>
			</DndProvider>

            <img
				onClick={() => {
					setNextArray(nextArray + 1);
				}}
				src={nextIcon}
				className="z-10 fixed top-1/3 rotate-90 cursor-pointer left-16"
			/>

			{nextArray >= 14 && (
				<div className=" ">
					{showNextElement > 1}
					{showNextElement <= 10}
				</div>
			)}

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
            
            <div className="flex justify-center mb-40" style={{position:'absolute', width:'1000px', height:'54px', left:'11%'}}>
				{/* Displaying Initial Array */}
				<div className="flex border-black border-b-4 justify-center">
					{numbers.map((number) => {
						return (
							<div
								key={number}
								className="bg-slate-300 border-r-2 border-white" style={{width:'50px', height:'50px'}}
							>
								{number}
							</div>
						);
					})}
				</div>
            </div>

            <div className="w-full mb-10 flex items-center flex-col">
            {/* Middle Layer */}
				{2 <= nextArray && (
					<DndProvider backend={HTML5Backend}>
						<div className="flex flex-col justify-center mt-20">
							<div className="flex  justify-center">
								<p className=" w-max p-2 rounded-xl bg-blue-200 m-2">
									Place the numbers in their respective boxes
								</p>
							</div>

                            <div className="flex justify-center flex-col" style={{position:'relative', width:'1000px', height:'54px'}}>
                                <div className="flex justify-center w-full gap-8">
                                    <div className="flex border-b-4 border-black">
                                        {numbers.map((number, index) => {
                                            return index < half ? (
                                                <Container shouldAccept={number} />
                                            ) : (
                                                ""
                                            );
                                        })}
                                    </div>

                                    <div className="flex border-b-4 border-black">
                                        {numbers.map((number, index) => {
                                            return index >= half ? (
                                                <Container shouldAccept={number} />
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
				{3 <= nextArray && (
					<DndProvider backend={HTML5Backend}>
                    <div className="flex justify-center flex-col" style={{position:'relative', width:'1000px', height:'54px'}}>
						<div className="flex justify-center w-full gap-8">
							<div className="flex border-b-4 border-black">
								{numbers.map((number, index) => {
									return index < firstHalf ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>

							<div className="flex border-b-4 border-black">
								{numbers.map((number, index) => {
									return index >= firstHalf && index < half ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>
							<div className="flex border-b-4 border-black">
								{numbers.map((number, index) => {
									return index >= half && index <= 14 ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>
							<div className="flex border-b-4 border-black">
								{numbers.map((number, index) => {
									return index >= 15 ? <Container shouldAccept={number} /> : "";
								})}
							</div>
						</div>
                        </div>
					</DndProvider>
				)}  
				</div>
                
				<div className="w-full mb-5 flex items-center flex-col">
                {/* Fourth Layer */}
                {4 <= nextArray && (
					<DndProvider backend={HTML5Backend}>
                    <div className="flex justify-center flex-col" style={{position:'relative', width:'1000px', height:'54px'}}>
						<div className="flex justify-center w-full gap-6">
                            <div className="flex border-b-4 border-black">
								{numbers.map((number, index) => {
									return index < secondHalf ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>

							<div className="flex border-b-4 border-black">
								{numbers.map((number, index) => {
									return index >= secondHalf && index < firstHalf ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>

							<div className="flex border-b-4 border-black">
								{numbers.map((number, index) => {
									return index >= firstHalf && index <= 7 ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>
							<div className="flex border-b-4 border-black">
								{numbers.map((number, index) => {
									return index >= 8 && index < half ? (
                                        <Container shouldAccept={number} />
                                    ) : (
									    ""
									);
								})}
							</div>

                            <div className="flex border-b-4 border-black">
								{numbers.map((number, index) => {
									return index >= half && index <= 12 ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>

							<div className="flex border-b-4 border-black">
								{numbers.map((number, index) => {
									return index >= 13 && index <= 14 ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>

							<div className="flex border-b-4 border-black">
								{numbers.map((number, index) => {
									return index >= 15 && index <= 17 ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>
							<div className="flex border-b-4 border-black">
								{numbers.map((number, index) => {
									return index >= 18 ? <Container shouldAccept={number} /> : "";
								})}
							</div>
						</div>
                    </div>
					</DndProvider>
				)}
				</div>

				<div className="w-full flex items-center flex-col">
                {/* Fifth Layer */}
				{5 <= nextArray && (
					<DndProvider backend={HTML5Backend}>
						<div className="flex gap-2.5 mb-5">
							<div className="flex items-center  gap-1 flex-col">
								<div className="flex gap-2.5">
									<Container shouldAccept={numbers[0]} />
									<Container shouldAccept={numbers[1]} />
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col">
								<div className="flex gap-2.5">
									<Container shouldAccept={numbers[2]} />
									<div className="flex border-b-4 border-black">
										<Container shouldAccept={numbers[3]} />
										<Container shouldAccept={numbers[4]} />
									</div>
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col">
								<div className="flex gap-2.5">
									<Container shouldAccept={numbers[5]} />
									<Container shouldAccept={numbers[6]} />
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col">

								<div className="flex gap-2.5">
									<Container shouldAccept={numbers[7]} />
									<div className="flex border-b-4 border-black">
										<Container shouldAccept={numbers[8]} />
										<Container shouldAccept={numbers[9]} />
									</div>
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col">
								<div className="flex gap-2.5">
									<Container shouldAccept={numbers[10]} />
									<Container shouldAccept={numbers[11]} />
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col">
								<div className="flex gap-2.5">
									<Container shouldAccept={numbers[12]} />
									<div className="flex border-b-4 border-black">
										<Container shouldAccept={numbers[13]} />
										<Container shouldAccept={numbers[14]} />
									</div>
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col">
								<div className="flex gap-2.5">
									<Container shouldAccept={numbers[15]} />
									<Container shouldAccept={numbers[16]} />
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col">

								<div className="flex gap-2.5">
									<Container shouldAccept={numbers[17]} />
									<div className="flex border-b-4 border-black">
										<Container shouldAccept={numbers[18]} />
										<Container shouldAccept={numbers[19]} />
									</div>
								</div>
							</div>
						</div>
					</DndProvider>
				)}
				</div>

				<div className="flex justify-center mb-2" style={{position:'relative', width:'1000px', height:'54px', left: '11%'}}>
				{6 <= nextArray && (
					<div className="flex gap-1">
						{numbers.map((number) => {
							return (
								<div className="p-4 border-r-0 border-b-4 border-black bg-slate-300" style={{width:'50px', height:'50px'}}>
									{number}
								</div>
							);
						})}
					</div>

					
				)}
				</div>

				<div className="w-full flex items-center flex-col">
				{6 <= nextArray && (
					<div className="flex justify-center items-center flex-col">
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
				<div className="w-full mb-20 flex items-center flex-col">
					{7 <= nextArray && (
						<div className="flex justify-center gap-2">
							<div className="flex flex-col gap-2 justify-center items-center">
								<div className="flex">
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[1]} />
										<span
											className={
												showNextElement == 1 ||
												showNextElement == 2 ||
												showNextElement == 3
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>

									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[0]} />
										<span
											className={
												showNextElement == 3
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-2 justify-center items-center">
								<div className="flex">
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[3]} />
										<span
											className={
												showNextElement == 1
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[2]} />
										<span
											className={
												showNextElement == 2
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-2 justify-center items-center">
								<div className="flex">
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[5]} />
										<span
											className={
												showNextElement == 4 ||
												showNextElement == 5 ||
												showNextElement == 6
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[4]} />
										<span
											className={
												showNextElement == 6
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-2 justify-center items-center">
								<div className="flex">
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[7]} />
										<span
											className={
												showNextElement == 4
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[6]} />
										<span
											className={
												showNextElement == 5
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-2 justify-center items-center">
								<div className="flex">
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[9]} />
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
										<Container shouldAccept={numbers[8]} />
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
							<div className="flex flex-col gap-2 justify-center items-center">
								<div className="flex">
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[11]} />
										<span
											className={
												showNextElement == 1 ||
												showNextElement == 2 ||
												showNextElement == 3
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>

									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[10]} />
										<span
											className={
												showNextElement == 3
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-2 justify-center items-center">
								<div className="flex">
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[13]} />
										<span
											className={
												showNextElement == 1
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[12]} />
										<span
											className={
												showNextElement == 2
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-2 justify-center items-center">
								<div className="flex">
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[15]} />
										<span
											className={
												showNextElement == 4 ||
												showNextElement == 5 ||
												showNextElement == 6
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[14]} />
										<span
											className={
												showNextElement == 6
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-2 justify-center items-center">
								<div className="flex">
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[17]} />
										<span
											className={
												showNextElement == 4
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[16]} />
										<span
											className={
												showNextElement == 5
													? " text-2xl opacity-100"
													: " text-2xl opacity-0"
											}
										>
											&uarr;
										</span>
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-2 justify-center items-center">
								<div className="flex">
									<div className="flex items-center flex-col">
										<Container shouldAccept={numbers[19]} />
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
										<Container shouldAccept={numbers[18]} />
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
						<div className="flex justify-center mb-4 gap-3">
							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container shouldAccept={numbers[3]} />
									<Container shouldAccept={numbers[2]} />
									<Container shouldAccept={numbers[1]} />
									<Container shouldAccept={numbers[0]} />
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex  mt-2">
									<Container shouldAccept={numbers[7]} />
									<Container shouldAccept={numbers[6]} />
									<Container shouldAccept={numbers[5]} />
									<Container shouldAccept={numbers[4]} />
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container shouldAccept={numbers[11]} />
									<Container shouldAccept={numbers[10]} />
									<Container shouldAccept={numbers[9]} />
									<Container shouldAccept={numbers[8]} />
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex  mt-2">
									<Container shouldAccept={numbers[15]} />
									<Container shouldAccept={numbers[14]} />
									<Container shouldAccept={numbers[13]} />
									<Container shouldAccept={numbers[12]} />
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2">
									<Container shouldAccept={numbers[19]} />
									<Container shouldAccept={numbers[18]} />
									<Container shouldAccept={numbers[17]} />
									<Container shouldAccept={numbers[16]} />
								</div>
							</div>
						</div>
					)}

					{9 <= nextArray && (
						<div className="flex justify-center mb-4 gap-4">
							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container shouldAccept={numbers[7]} />
									<Container shouldAccept={numbers[6]} />
									<Container shouldAccept={numbers[5]} />
									<Container shouldAccept={numbers[4]} />
									<Container shouldAccept={numbers[3]} />
									<Container shouldAccept={numbers[2]} />
									<Container shouldAccept={numbers[1]} />
									<Container shouldAccept={numbers[0]} />
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container shouldAccept={numbers[15]} />
									<Container shouldAccept={numbers[14]} />
									<Container shouldAccept={numbers[13]} />
									<Container shouldAccept={numbers[12]} />
									<Container shouldAccept={numbers[11]} />
									<Container shouldAccept={numbers[10]} />
									<Container shouldAccept={numbers[9]} />
									<Container shouldAccept={numbers[8]} />
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2">
									<Container shouldAccept={numbers[19]} />
									<Container shouldAccept={numbers[18]} />
									<Container shouldAccept={numbers[17]} />
									<Container shouldAccept={numbers[16]} />
								</div>
							</div>
						</div>
					)}

					{10 <= nextArray && (
						<div className="flex justify-center mb-4 gap-4">
							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container shouldAccept={numbers[15]} />
									<Container shouldAccept={numbers[14]} />
									<Container shouldAccept={numbers[13]} />
									<Container shouldAccept={numbers[12]} />
									<Container shouldAccept={numbers[11]} />
									<Container shouldAccept={numbers[10]} />
									<Container shouldAccept={numbers[9]} />
									<Container shouldAccept={numbers[8]} />
									<Container shouldAccept={numbers[7]} />
									<Container shouldAccept={numbers[6]} />
									<Container shouldAccept={numbers[5]} />
									<Container shouldAccept={numbers[4]} />
									<Container shouldAccept={numbers[3]} />
									<Container shouldAccept={numbers[2]} />
									<Container shouldAccept={numbers[1]} />
									<Container shouldAccept={numbers[0]} />
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2">
									<Container shouldAccept={numbers[19]} />
									<Container shouldAccept={numbers[18]} />
									<Container shouldAccept={numbers[17]} />
									<Container shouldAccept={numbers[16]} />
								</div>
							</div>
						</div>
					)}

					{11 <= nextArray && (
						<div className="flex justify-center mb-12 gap-4">
							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container shouldAccept={numbers[19]} />
									<Container shouldAccept={numbers[18]} />
									<Container shouldAccept={numbers[17]} />
									<Container shouldAccept={numbers[16]} />
									<Container shouldAccept={numbers[15]} />
									<Container shouldAccept={numbers[14]} />
									<Container shouldAccept={numbers[13]} />
									<Container shouldAccept={numbers[12]} />
									<Container shouldAccept={numbers[11]} />
									<Container shouldAccept={numbers[10]} />
									<Container shouldAccept={numbers[9]} />
									<Container shouldAccept={numbers[8]} />
									<Container shouldAccept={numbers[7]} />
									<Container shouldAccept={numbers[6]} />
									<Container shouldAccept={numbers[5]} />
									<Container shouldAccept={numbers[4]} />
									<Container shouldAccept={numbers[3]} />
									<Container shouldAccept={numbers[2]} />
									<Container shouldAccept={numbers[1]} />
									<Container shouldAccept={numbers[0]} />
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