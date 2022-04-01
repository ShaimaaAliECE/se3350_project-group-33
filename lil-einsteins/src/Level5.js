import { useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Box } from "./Components/DraggableBox";
import { Container } from "./Components/Container";
import Timer from "./Components/Timer";
import nextIcon from "./images/icons8-next.png";
import randomizeNewArray from "./Components/GenerateNumbers";
import { ItemTypes } from "./Components/ItemTypes";
import NavbarComponent from "./Components/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";

const numbers = randomizeNewArray(50, 100);

let tempArray = numbers.slice();

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const unsorted = shuffleArray(tempArray);

//loads values into the boxes
const Level5 = () => {
  const boxDetails = [
    { name: `${unsorted[0]}`, type: ItemTypes.BOX },
    { name: `${unsorted[1]}`, type: ItemTypes.BOX },
    { name: `${unsorted[2]}`, type: ItemTypes.BOX },
    { name: `${unsorted[3]}`, type: ItemTypes.BOX },
    { name: `${unsorted[4]}`, type: ItemTypes.BOX },
    { name: `${unsorted[5]}`, type: ItemTypes.BOX },
    { name: `${unsorted[6]}`, type: ItemTypes.BOX },
    { name: `${unsorted[7]}`, type: ItemTypes.BOX },
    { name: `${unsorted[8]}`, type: ItemTypes.BOX },
    { name: `${unsorted[9]}`, type: ItemTypes.BOX },
    { name: `${unsorted[20]}`, type: ItemTypes.BOX },
    { name: `${unsorted[21]}`, type: ItemTypes.BOX },
    { name: `${unsorted[22]}`, type: ItemTypes.BOX },
    { name: `${unsorted[23]}`, type: ItemTypes.BOX },
    { name: `${unsorted[24]}`, type: ItemTypes.BOX },
    { name: `${unsorted[25]}`, type: ItemTypes.BOX },
    { name: `${unsorted[26]}`, type: ItemTypes.BOX },
    { name: `${unsorted[27]}`, type: ItemTypes.BOX },
    { name: `${unsorted[28]}`, type: ItemTypes.BOX },
    { name: `${unsorted[29]}`, type: ItemTypes.BOX },
    { name: `${unsorted[30]}`, type: ItemTypes.BOX },
    { name: `${unsorted[31]}`, type: ItemTypes.BOX },
    { name: `${unsorted[32]}`, type: ItemTypes.BOX },
    { name: `${unsorted[33]}`, type: ItemTypes.BOX },
    { name: `${unsorted[34]}`, type: ItemTypes.BOX },
    { name: `${unsorted[35]}`, type: ItemTypes.BOX },
    { name: `${unsorted[36]}`, type: ItemTypes.BOX },
    { name: `${unsorted[37]}`, type: ItemTypes.BOX },
    { name: `${unsorted[38]}`, type: ItemTypes.BOX },
    { name: `${unsorted[39]}`, type: ItemTypes.BOX },
    { name: `${unsorted[40]}`, type: ItemTypes.BOX },
    { name: `${unsorted[41]}`, type: ItemTypes.BOX },
    { name: `${unsorted[42]}`, type: ItemTypes.BOX },
    { name: `${unsorted[43]}`, type: ItemTypes.BOX },
    { name: `${unsorted[44]}`, type: ItemTypes.BOX },
    { name: `${unsorted[45]}`, type: ItemTypes.BOX },
    { name: `${unsorted[46]}`, type: ItemTypes.BOX },
    { name: `${unsorted[47]}`, type: ItemTypes.BOX },
    { name: `${unsorted[48]}`, type: ItemTypes.BOX },
    { name: `${unsorted[49]}`, type: ItemTypes.BOX },
    { name: `${unsorted[10]}`, type: ItemTypes.BOX },
    { name: `${unsorted[11]}`, type: ItemTypes.BOX },
    { name: `${unsorted[12]}`, type: ItemTypes.BOX },
    { name: `${unsorted[13]}`, type: ItemTypes.BOX },
    { name: `${unsorted[14]}`, type: ItemTypes.BOX },
    { name: `${unsorted[15]}`, type: ItemTypes.BOX },
    { name: `${unsorted[16]}`, type: ItemTypes.BOX },
    { name: `${unsorted[17]}`, type: ItemTypes.BOX },
    { name: `${unsorted[18]}`, type: ItemTypes.BOX },
    { name: `${unsorted[19]}`, type: ItemTypes.BOX }
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
      <NavbarComponent level="Level5" />
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
        <a href="/Level5">
          <div className=" p-4 rounded-xl mt-2 bg-cyan-600 text-white">
            Generate New Random Array
          </div>
        </a>

        <p className=" w-max  p-2 rounded-xl bg-blue-200 m-2">Initial Array:</p>
        <p className=" w-max  p-2 rounded-xl bg-blue-200 m-2">
          Total elements = 50
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
                style={{ width: "27px", height: "50px" }}
              >
                {number}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center">
        {/* Middle Layer */}
        {2 <= nextArray && (
          <DndProvider backend={HTML5Backend}>
            <div className="flex flex-col justify-center mt-20">
              <div className="flex  justify-center">
                <p className=" w-max p-2 rounded-xl bg-blue-200 m-2">
                  Place the numbers in their respective boxes
                </p>
              </div>

              <div className="flex justify-center flex-col">
                <div className="flex w-full gap-4">
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

      <div className="w-full mt-5  flex items-center flex-col">
        {/* Third Layer */}
        {3 <= nextArray && (
          <DndProvider backend={HTML5Backend}>
            <div
              className="flex justify-center flex-col"
              style={{ position: "relative", width: "1000px", height: "54px" }}
            >
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
                    return index >= 15 ? (
                      <Container shouldAccept={number} />
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
        {4 <= nextArray && (
          <DndProvider backend={HTML5Backend}>
            <div
              className="flex justify-center flex-col"
              style={{ position: "relative", width: "1000px", height: "54px" }}
            >
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
                    return index >= 18 ? (
                      <Container shouldAccept={number} />
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

export default Level5;
