import React, { useEffect, useState } from "react";
import axios from "axios";
const Child = () => {
  const [data, setdata] = useState([
    {
      question: undefined,
      correctAnswerr: undefined,
      incorrectAnswers: "",
    },
  ]);
  const [score, setscore] = useState(0);
  const [show, setshow] = useState(false);
  const [incre, setincre] = useState(0);
  const [ss, setss] = useState(false);

  // request function
  const rr = async () => {
    try {
      let resul = await axios(
        "https://the-trivia-api.com/api/questions?categories=history,geography&limit=11&region=IN&difficulty=medium"
      );
      setdata(resul.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    rr();
  }, [ss]);

  let answerArray = [
    data[incre].correctAnswer,
    ...data[incre].incorrectAnswers,
  ];

  const handleanswer = (da) => {
    if (incre < data.length) {
      if (da === data[incre].correctAnswer) {
        setscore(score + 1);
      }
    }

    if (incre === data.length - 1) {
      alert("you answered all the question");
      setshow(true);
    } else {
      setincre(incre + 1);
    }
  };
  //reset function
  const resett = () => {
    setss(!ss);
    setscore(0);
    setshow(false);
    setincre(0);
  };

  return (
    <>
      {show ? (
        <div className="finalscore">
          <h2>
            You scored {score} out of {data.length}
          </h2>
          <button onClick={resett} className="resetbutton">
            NextSet
          </button>
        </div>
      ) : (
        <div className="gridcontainer">
          <div className="gridchild" id="grid1">
            <h4>
              Question {incre + 1}/{data.length}
            </h4>
          </div>

          <div className="gridchild" id="grid2">
            {answerArray.map((item, inde) => {
              return (
                <button
                  className="answerbuttons"
                  key={inde}
                  onClick={() => {
                    handleanswer(item);
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className="gridchild" id="grid3">
            <h2 className="que"> {data[incre].question}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Child;
