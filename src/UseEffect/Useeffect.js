import React from "react";
import "./Useeffect.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Useeffect = () => {
  const [joke, setJoke] = useState({ joke: "", punchline: "" });
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        setJoke({
          joke: response.data.setup,
          punchline: response.data.punchline,
          
        });
        console.log(count);
      });
  }, [count]);
  return (
    <>
      <div className="useEffectbox">
        <div className="useEffecthead">
          <h1>Use Effect Hook</h1>
        </div>
        <div className="useEffectcontent">
          <h3 className="useEffecttext" >{joke.joke}</h3>
          <h4 className="useEffecttext2">{joke.punchline}</h4>
        </div>
        <div>
          {" "}
          <button
            className="useEffectcount"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Next Joke
          </button>
        </div>
      </div>
    </>
  );
};

export default Useeffect;
