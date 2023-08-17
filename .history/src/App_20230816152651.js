import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState={
  questions:[],
  status:
};
function reducer(state,action){}

export default function App() {
  const [state,dispatch]=useReducer(reducer,initialState);
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error"));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  );
}
