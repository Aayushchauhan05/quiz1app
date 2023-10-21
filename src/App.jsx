import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who is the prime minister of india",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Narendra modi",
          correct: true,
        },
        {
          text: "Rahul Gandhi",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "who is the god of cricket?",
      answers: [
        {
          text: "Virat Kholi",
          correct: false,
        },
        {
          text: "Dhoni",
          correct: false,
        },
        {
          text: "Raina",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Who is the CM minister of UP",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Yogi aditya nath",
          correct: true,
        },
        {
          text: "Narendra modi",
          correct: false,
        },
        {
          text: "Rahul Gandhi",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "capital of india",
      answers: [
        {
          text: "New delhi",
          correct: true,
        },
        {
          text: "shimla",
          correct: false,
        },
        {
          text: "Kashmir",
          correct: false,
        },
        {
          text: "Uttar pradesh",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "who played the role of captain jack sparrow in parirates of carribean",
      answers: [
        {
          text: "Johnny Deep",
          correct: true,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Narendra modi",
          correct: false,
        },
        {
          text: "Rahul Gandhi",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Best anime series of all time",
      answers: [
        {
          text: "AOT",
          correct: false,
        },
        {
          text: "Naruto",
          correct: true,
        },
        {
          text: "Bleach",
          correct: false,
        },
        {
          text: "One-piece",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who is the ghost of the uchiha",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Itachi uchicha",
          correct: false,
        },
        {
          text: "Madara uchiha",
          correct: true,
        },
        {
          text: "sasuke uchiha",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who is the last uchiha",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Itachi uchicha",
          correct: false,
        },
        {
          text: "Madara uchiha",
          correct: false,
        },
        {
          text: "sasuke uchiha",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "Who is the god of shinobi",
      answers: [
        {
          text: "hashirama senju",
          correct: true,
        },
        {
          text: "Itachi uchicha",
          correct: false,
        },
        {
          text: "Madara uchiha",
          correct: false,
        },
        {
          text: "sasuke uchiha",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "who is the sensei of naruto after kakashi ?",
      answers: [
        {
          text: "sunade",
          correct: false,
        },
        {
          text: "orochimaru",
          correct: false,
        },
        {
          text: "jiraya",
          correct: true,
        },
        {
          text: "sasuke uchiha",
          correct: false,
        },
      ],
    },
    
    {
      id: 14,
      question: "who also kmown as the the Tode sage?",
      answers: [
        {
          text: "sunade",
          correct: false,
        },
        {
          text: "orochimaru",
          correct: false,
        },
        {
          text: "jiraya",
          correct: true,
        },
        {
          text: "sasuke uchiha",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "who also known as the the Tode sage?",
      answers: [
        {
          text: "sunade",
          correct: false,
        },
        {
          text: "orochimaru",
          correct: false,
        },
        {
          text: "jiraya",
          correct: true,
        },
        {
          text: "sasuke uchiha",
          correct: false,
        },
      ],
    },
     {
      id: 15,
      question: "sensei of sasuke",
      answers: [
        {
          text: "sunade",
          correct: false,
        },
        {
          text: "orochimaru",
          correct: true,
        },
        {
          text: "jiraya",
          correct: false,
        },
        {
          text: "sasuke uchiha",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 100" },
        { id: 2, amount: "₹ 200" },
        { id: 3, amount: "₹ 300" },
        { id: 4, amount: "₹ 500" },
        { id: 5, amount: "₹ 1.000" },
        { id: 6, amount: "₹ 2.000" },
        { id: 7, amount: "₹ 4.000" },
        { id: 8, amount: "₹ 8.000" },
        { id: 9, amount: "₹ 16.000" },
        { id: 10, amount: "₹ 32.000" },
        { id: 11, amount: "₹ 64.000" },
        { id: 12, amount: "₹ 125.000" },
        { id: 13, amount: "₹ 250.000" },
        { id: 14, amount: "₹ 500.000" },
        { id: 15, amount: "₹ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;