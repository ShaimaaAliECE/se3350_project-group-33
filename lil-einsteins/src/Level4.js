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

let tempArray = numbers.slice();

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  const temp = array[i];
	  array[i] = array[j];
	  array[j] = temp;
	}
	return array;
}

const unsorted = shuffleArray(tempArray);

//loads values into the boxes
const Level4 = () => {
    const boxDetails = [
		{name: `${unsorted[0]}`, type: ItemTypes.BOX},
		{name: `${unsorted[1]}`, type: ItemTypes.BOX},
		{name: `${unsorted[2]}`, type: ItemTypes.BOX},
		{name: `${unsorted[3]}`, type: ItemTypes.BOX},
		{name: `${unsorted[4]}`, type: ItemTypes.BOX},
		{name: `${unsorted[5]}`, type: ItemTypes.BOX},
		{name: `${unsorted[6]}`, type: ItemTypes.BOX},
		{name: `${unsorted[7]}`, type: ItemTypes.BOX},
		{name: `${unsorted[8]}`, type: ItemTypes.BOX},
		{name: `${unsorted[9]}`, type: ItemTypes.BOX},
        {name: `${unsorted[10]}`, type: ItemTypes.BOX},
		{name: `${unsorted[11]}`, type: ItemTypes.BOX},
		{name: `${unsorted[12]}`, type: ItemTypes.BOX},
		{name: `${unsorted[13]}`, type: ItemTypes.BOX},
		{name: `${unsorted[14]}`, type: ItemTypes.BOX},
		{name: `${unsorted[15]}`, type: ItemTypes.BOX},
		{name: `${unsorted[16]}`, type: ItemTypes.BOX},
		{name: `${unsorted[17]}`, type: ItemTypes.BOX},
		{name: `${unsorted[18]}`, type: ItemTypes.BOX},
		{name: `${unsorted[19]}`, type: ItemTypes.BOX}
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
					{unsorted.map((number) => {
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
                                        {unsorted.map((number, index) => {
                                            return index < half ? (
                                                <Container shouldAccept={number} />
                                            ) : (
                                                ""
                                            );
                                        })}
                                    </div>

                                    <div className="flex border-b-4 border-black">
                                        {unsorted.map((number, index) => {
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
								{unsorted.map((number, index) => {
									return index < firstHalf ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>

							<div className="flex border-b-4 border-black">
								{unsorted.map((number, index) => {
									return index >= firstHalf && index < half ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>
							<div className="flex border-b-4 border-black">
								{unsorted.map((number, index) => {
									return index >= half && index <= 14 ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>
							<div className="flex border-b-4 border-black">
								{unsorted.map((number, index) => {
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
								{unsorted.map((number, index) => {
									return index < secondHalf ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>

							<div className="flex border-b-4 border-black">
								{unsorted.map((number, index) => {
									return index >= secondHalf && index < firstHalf ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>

							<div className="flex border-b-4 border-black">
								{unsorted.map((number, index) => {
									return index >= firstHalf && index <= 7 ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>
							<div className="flex border-b-4 border-black">
								{unsorted.map((number, index) => {
									return index >= 8 && index < half ? (
                                        <Container shouldAccept={number} />
                                    ) : (
									    ""
									);
								})}
							</div>

                            <div className="flex border-b-4 border-black">
								{unsorted.map((number, index) => {
									return index >= half && index <= 12 ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>

							<div className="flex border-b-4 border-black">
								{unsorted.map((number, index) => {
									return index >= 13 && index <= 14 ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>

							<div className="flex border-b-4 border-black">
								{unsorted.map((number, index) => {
									return index >= 15 && index <= 17 ? (
										<Container shouldAccept={number} />
									) : (
										""
									);
								})}
							</div>
							<div className="flex border-b-4 border-black">
								{unsorted.map((number, index) => {
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
									<Container shouldAccept={unsorted[0]} />
									<Container shouldAccept={unsorted[1]} />
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col">
								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[2]} />
									<div className="flex border-b-4 border-black">
										<Container shouldAccept={unsorted[3]} />
										<Container shouldAccept={unsorted[4]} />
									</div>
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col">
								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[5]} />
									<Container shouldAccept={unsorted[6]} />
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col">

								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[7]} />
									<div className="flex border-b-4 border-black">
										<Container shouldAccept={unsorted[8]} />
										<Container shouldAccept={unsorted[9]} />
									</div>
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col">
								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[10]} />
									<Container shouldAccept={unsorted[11]} />
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col">
								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[12]} />
									<div className="flex border-b-4 border-black">
										<Container shouldAccept={unsorted[13]} />
										<Container shouldAccept={unsorted[14]} />
									</div>
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col">
								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[15]} />
									<Container shouldAccept={unsorted[16]} />
								</div>
							</div>

							<div className="flex items-center  gap-1 flex-col">

								<div className="flex gap-2.5">
									<Container shouldAccept={unsorted[17]} />
									<div className="flex border-b-4 border-black">
										<Container shouldAccept={unsorted[18]} />
										<Container shouldAccept={unsorted[19]} />
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
						{unsorted.map((number) => {
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
						<div className="flex justify-center gap-3">
							<div className="flex flex-col gap-2 justify-center items-center">
								<div className="flex">
									<div className="flex items-center flex-col">
										<Container shouldAccept = {((unsorted.slice(0,2)).sort())[0]} />
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
										<Container shouldAccept={((unsorted.slice(0,2)).sort())[1]} />
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
										<Container shouldAccept={((unsorted.slice(2,4)).sort())[0]} />
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
										<Container shouldAccept={((unsorted.slice(2,4)).sort())[1]} />
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
										<Container shouldAccept={((unsorted.slice(4,6)).sort())[0]} />
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
										<Container shouldAccept={((unsorted.slice(4,6)).sort())[1]} />
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
										<Container shouldAccept={((unsorted.slice(6,8)).sort())[0]} />
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
										<Container shouldAccept={((unsorted.slice(6,8)).sort())[1]} />
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
										<Container shouldAccept={((unsorted.slice(8,10)).sort())[0]} />
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
										<Container shouldAccept={((unsorted.slice(8,10)).sort())[1]} />
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
										<Container shouldAccept={((unsorted.slice(10,12)).sort())[0]} />
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
										<Container shouldAccept={((unsorted.slice(10,12)).sort())[1]} />
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
										<Container shouldAccept={((unsorted.slice(12,14)).sort())[0]} />
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
										<Container shouldAccept={((unsorted.slice(12,14)).sort())[1]} />
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
										<Container shouldAccept={((unsorted.slice(14,16)).sort())[0]} />
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
										<Container shouldAccept={((unsorted.slice(14,16)).sort())[1]} />
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
										<Container shouldAccept={((unsorted.slice(16,18)).sort())[0]} />
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
										<Container shouldAccept={((unsorted.slice(16,18)).sort())[1]} />
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
										<Container shouldAccept={((unsorted.slice(18,20)).sort())[0]} />
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
										<Container shouldAccept={((unsorted.slice(18,20)).sort())[1]} />
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
									<Container shouldAccept={((unsorted.slice(0,4)).sort())[0]} />
									<Container shouldAccept={((unsorted.slice(0,4)).sort())[1]} />
									<Container shouldAccept={((unsorted.slice(0,4)).sort())[2]} />
									<Container shouldAccept={((unsorted.slice(0,4)).sort())[3]} />
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex  mt-2">
									<Container shouldAccept={((unsorted.slice(4,8)).sort())[0]} />
									<Container shouldAccept={((unsorted.slice(4,8)).sort())[1]} />
									<Container shouldAccept={((unsorted.slice(4,8)).sort())[2]} />
									<Container shouldAccept={((unsorted.slice(4,8)).sort())[3]} />
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container shouldAccept={((unsorted.slice(8,12)).sort())[0]} />
									<Container shouldAccept={((unsorted.slice(8,12)).sort())[1]} />
									<Container shouldAccept={((unsorted.slice(8,12)).sort())[2]} />
									<Container shouldAccept={((unsorted.slice(8,12)).sort())[3]} />
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex  mt-2">
									<Container shouldAccept={((unsorted.slice(12,16)).sort())[0]} />
									<Container shouldAccept={((unsorted.slice(12,16)).sort())[1]} />
									<Container shouldAccept={((unsorted.slice(12,16)).sort())[2]} />
									<Container shouldAccept={((unsorted.slice(12,16)).sort())[3]} />
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2">
									<Container shouldAccept={((unsorted.slice(16,20)).sort())[0]} />
									<Container shouldAccept={((unsorted.slice(16,20)).sort())[1]} />
									<Container shouldAccept={((unsorted.slice(16,20)).sort())[2]} />
									<Container shouldAccept={((unsorted.slice(16,20)).sort())[3]} />
								</div>
							</div>
						</div>
					)}

					{9 <= nextArray && (
						<div className="flex justify-center mb-4 gap-4">
							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container shouldAccept={((unsorted.slice(0,8)).sort())[0]} />
									<Container shouldAccept={((unsorted.slice(0,8)).sort())[1]} />
									<Container shouldAccept={((unsorted.slice(0,8)).sort())[2]} />
									<Container shouldAccept={((unsorted.slice(0,8)).sort())[3]} />
									<Container shouldAccept={((unsorted.slice(0,8)).sort())[4]} />
									<Container shouldAccept={((unsorted.slice(0,8)).sort())[5]} />
									<Container shouldAccept={((unsorted.slice(0,8)).sort())[6]} />
									<Container shouldAccept={((unsorted.slice(0,8)).sort())[7]} />
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container shouldAccept={((unsorted.slice(8,16)).sort())[0]} />
									<Container shouldAccept={((unsorted.slice(8,16)).sort())[1]} />
									<Container shouldAccept={((unsorted.slice(8,16)).sort())[2]} />
									<Container shouldAccept={((unsorted.slice(8,16)).sort())[3]} />
									<Container shouldAccept={((unsorted.slice(8,16)).sort())[4]} />
									<Container shouldAccept={((unsorted.slice(8,16)).sort())[5]} />
									<Container shouldAccept={((unsorted.slice(8,16)).sort())[6]} />
									<Container shouldAccept={((unsorted.slice(8,16)).sort())[7]} />
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2">
									<Container shouldAccept={((unsorted.slice(16,20)).sort())[0]} />
									<Container shouldAccept={((unsorted.slice(16,20)).sort())[1]} />
									<Container shouldAccept={((unsorted.slice(16,20)).sort())[2]} />
									<Container shouldAccept={((unsorted.slice(16,20)).sort())[3]} />
								</div>
							</div>
						</div>
					)}

					{10 <= nextArray && (
						<div className="flex justify-center mb-4 gap-6">
							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[0]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[1]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[2]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[3]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[4]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[5]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[6]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[7]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[8]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[9]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[10]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[11]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[12]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[13]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[14]} />
									<Container shouldAccept={((unsorted.slice(0,16)).sort())[15]} />
								</div>
							</div>

							<div className="flex flex-col ">
								<div className="flex mt-2">
									<Container shouldAccept={((unsorted.slice(16,20)).sort())[0]} />
									<Container shouldAccept={((unsorted.slice(16,20)).sort())[1]} />
									<Container shouldAccept={((unsorted.slice(16,20)).sort())[2]} />
									<Container shouldAccept={((unsorted.slice(16,20)).sort())[3]} />
								</div>
							</div>
						</div>
					)}

					{11 <= nextArray && (
						<div className="flex justify-center mb-12 gap-4">
							<div className="flex flex-col ">
								<div className="flex mt-2 ">
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[0]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[1]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[2]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[3]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[4]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[5]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[6]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[7]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[8]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[9]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[10]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[11]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[12]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[13]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[14]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[15]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[16]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[17]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[18]} />
									<Container shouldAccept={((unsorted.slice(0,20)).sort())[19]} />
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