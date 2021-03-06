import { useState, useCallback } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Box } from "./Components/DraggableBox";
import { Button } from "react-bootstrap";
import { Container } from "./Components/Container";
import infoIcon from "./images/icons8-info.png";
import nextIcon from "./images/icons8-next.png";
import randomizeNewArray from "./Components/GenerateNumbers";
import { ItemTypes } from "./Components/ItemTypes";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/NavbarComponent";
import Timer from "./Components/Timer";
import { useNavigate } from "react-router-dom";

const numbers = randomizeNewArray(10, 20);

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

const Level3 = () => {
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
    { name: `${unsorted[9]}`, type: ItemTypes.BOX }
  ];

  const [boxes] = useState(boxDetails);
  const [droppedBoxNames] = useState([]);

  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }

  const half = numbers.length / 2;
  const firstHalf = half / 2;

  const [nextArray, setNextArray] = useState(1);
  const [solved, setSolved] = useState(false);

  const [showNextElement, setShowNextElement] = useState(0);

  const navigate = useNavigate();
  const handleLevelChange = useCallback(
    () => navigate("/Level4", { replace: true }),
    [navigate]
  );

  return (
    <div>
      <NavbarComponent level="Level3" />
      <Timer />
      <DndProvider backend={HTML5Backend}>
        <div className="fixed bottom-0 bg-red-600 py-6  left-0 right-0 flex gap-1 justify-center">
          {boxes.map(({ name, type }, index) => (
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
          if (nextArray >= 9) setSolved(true);
        }}
        src={nextIcon}
        className="fixed top-1/3 rotate-90 cursor-pointer left-16"
      />

      {nextArray >= 7 && (
        <div className=" ">
          {showNextElement > 1}
          {showNextElement <= 10}
        </div>
      )}

      <div className="w-full mb-80 flex items-center flex-col">
        <a href="/Level3">
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
          Total elements = 10
        </p>

        {/* Displaying Initial Array */}
        <div className="flex border-black border-b-4 justify-center mb-4">
          {unsorted.map((number) => {
            return (
              <div
                key={number}
                className="p-8 bg-slate-300 border-r-2 border-white w-20 h-20"
              >
                {number}
              </div>
            );
          })}
        </div>

        {/* Middle Layer */}
        {2 <= nextArray && (
          <DndProvider backend={HTML5Backend}>
            <div className="flex flex-col justify-center">
              <div className="flex  justify-center">
                <p className=" w-max  p-2 rounded-xl bg-blue-200 m-2">
                  Place the numbers in their respective boxes
                </p>
              </div>
              <div className="flex justify-center w-full gap-8 mb-4">
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
          </DndProvider>
        )}

        {/* Third Layer */}

        {3 <= nextArray && (
          <DndProvider backend={HTML5Backend}>
            <div className="flex justify-center w-full gap-12 mb-4">
              <div className="flex border-b-4 border-black">
                {unsorted.map((number, index) => {
                  return index < firstHalf - 1 ? (
                    <Container shouldAccept={number} />
                  ) : (
                    ""
                  );
                })}
              </div>

              <div className="flex border-b-4 border-black">
                {unsorted.map((number, index) => {
                  return index >= firstHalf - 1 && index <= half - 1 ? (
                    <Container shouldAccept={number} />
                  ) : (
                    ""
                  );
                })}
              </div>
              <div className="flex border-b-4 border-black">
                {unsorted.map((number, index) => {
                  return index > half - 1 && index <= 6 ? (
                    <Container shouldAccept={number} />
                  ) : (
                    ""
                  );
                })}
              </div>
              <div className="flex border-b-4 border-black">
                {unsorted.map((number, index) => {
                  return index >= 7 ? <Container shouldAccept={number} /> : "";
                })}
              </div>
            </div>
          </DndProvider>
        )}

        {/* Fourth Layer */}

        {4 <= nextArray && (
          <DndProvider backend={HTML5Backend}>
            <div className="flex gap-4 mb-4">
              <div className="flex items-center  gap-2 flex-col">
                <div className="flex gap-4">
                  <Container shouldAccept={unsorted[0]} />
                  <Container shouldAccept={unsorted[1]} />
                </div>
              </div>

              <div className="flex items-center  gap-2 flex-col">
                <div className="flex gap-4">
                  <Container shouldAccept={unsorted[2]} />
                  <div className="flex border-b-4 border-black">
                    <Container shouldAccept={unsorted[3]} />
                    <Container shouldAccept={unsorted[4]} />
                  </div>
                </div>
              </div>

              <div className="flex items-center  gap-2 flex-col">
                <div className="flex gap-4">
                  <Container shouldAccept={unsorted[5]} />
                  <Container shouldAccept={unsorted[6]} />
                </div>
              </div>

              <div className="flex items-center  gap-2 flex-col">
                <div className="flex gap-4">
                  <Container shouldAccept={unsorted[7]} />
                  <div className="flex border-b-4 border-black">
                    <Container shouldAccept={unsorted[8]} />
                    <Container shouldAccept={unsorted[9]} />
                  </div>
                </div>
              </div>
            </div>
          </DndProvider>
        )}

        {4 <= nextArray && (
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2"></div>
          </div>
        )}

        {5 <= nextArray && (
          <div className="flex gap-4 mb-4">
            {unsorted.map((number) => {
              return (
                <div className="p-8 border-r-0 border-b-4 border-black bg-slate-300   w-20 h-20 ">
                  {number}
                </div>
              );
            })}
          </div>
        )}

        {6 <= nextArray && (
          <div className="flex justify-center items-center flex-col">
            <div className=" bg-blue-200 p-2 rounded-xl mb-4">
              We have successfully made the array atomic i.e. seperated each
              element out
            </div>

            <div className=" bg-blue-200 p-2 rounded-xl mb-4">
              We'll start merging them now :)
            </div>
          </div>
        )}

        <DndProvider backend={HTML5Backend}>
          {6 <= nextArray && (
            <div className="flex justify-center gap-4 ">
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
            </div>
          )}

          {7 <= nextArray && (
            <div className="flex justify-center mb-12 gap-4">
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
                <div className="flex mt-2">
                  <Container
                    shouldAccept={
                      unsorted.slice(8, 10).sort(function (a, b) {
                        return a - b;
                      })[0]
                    }
                  />
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
          )}

          {8 <= nextArray && (
            <div className="flex justify-center gap-4">
              <div className="flex">
                <div className="flex items-center flex-col">
                  <Container
                    shouldAccept={
                      unsorted.slice(0, 8).sort(function (a, b) {
                        return a - b;
                      })[0]
                    }
                  />
                </div>
                <div className="flex items-center flex-col">
                  <Container
                    shouldAccept={
                      unsorted.slice(0, 8).sort(function (a, b) {
                        return a - b;
                      })[1]
                    }
                  />
                </div>
                <div className="flex items-center flex-col">
                  <Container
                    shouldAccept={
                      unsorted.slice(0, 8).sort(function (a, b) {
                        return a - b;
                      })[2]
                    }
                  />
                </div>
                <div className="flex items-center flex-col">
                  <Container
                    shouldAccept={
                      unsorted.slice(0, 8).sort(function (a, b) {
                        return a - b;
                      })[3]
                    }
                  />
                </div>
                <div className="flex items-center flex-col">
                  <Container
                    shouldAccept={
                      unsorted.slice(0, 8).sort(function (a, b) {
                        return a - b;
                      })[4]
                    }
                  />
                </div>
                <div className="flex items-center flex-col">
                  <Container
                    shouldAccept={
                      unsorted.slice(0, 8).sort(function (a, b) {
                        return a - b;
                      })[5]
                    }
                  />
                </div>
                <div className="flex items-center flex-col">
                  <Container
                    shouldAccept={
                      unsorted.slice(0, 8).sort(function (a, b) {
                        return a - b;
                      })[6]
                    }
                  />
                </div>
                <div className="flex items-center flex-col">
                  <Container
                    shouldAccept={
                      unsorted.slice(0, 8).sort(function (a, b) {
                        return a - b;
                      })[7]
                    }
                  />
                </div>
              </div>

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
          )}

          {9 <= nextArray && (
            <div className="flex justify-center flex-col mb-12 gap-4">
              <div className="flex ">
                <Container
                  shouldAccept={
                    unsorted.slice(0, 10).sort(function (a, b) {
                      return a - b;
                    })[0]
                  }
                />
                <Container
                  shouldAccept={
                    unsorted.slice(0, 10).sort(function (a, b) {
                      return a - b;
                    })[1]
                  }
                />
                <Container
                  shouldAccept={
                    unsorted.slice(0, 10).sort(function (a, b) {
                      return a - b;
                    })[2]
                  }
                />
                <Container
                  shouldAccept={
                    unsorted.slice(0, 10).sort(function (a, b) {
                      return a - b;
                    })[3]
                  }
                />
                <Container
                  shouldAccept={
                    unsorted.slice(0, 10).sort(function (a, b) {
                      return a - b;
                    })[4]
                  }
                />
                <Container
                  shouldAccept={
                    unsorted.slice(0, 10).sort(function (a, b) {
                      return a - b;
                    })[5]
                  }
                />
                <Container
                  shouldAccept={
                    unsorted.slice(0, 10).sort(function (a, b) {
                      return a - b;
                    })[6]
                  }
                />
                <Container
                  shouldAccept={
                    unsorted.slice(0, 10).sort(function (a, b) {
                      return a - b;
                    })[7]
                  }
                />
                <Container
                  shouldAccept={
                    unsorted.slice(0, 10).sort(function (a, b) {
                      return a - b;
                    })[8]
                  }
                />
                <Container
                  shouldAccept={
                    unsorted.slice(0, 10).sort(function (a, b) {
                      return a - b;
                    })[9]
                  }
                />
              </div>
            </div>
          )}
        </DndProvider>
      </div>
    </div>
  );
};

export default Level3;
