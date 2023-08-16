import React, { useRef } from "react";
import "./UseRef.css";
import Box from "../Components/Box";
const UseRef = (props) => {
    const firstNameRef=useRef(null)
    const firstName=()=>{console.log(firstNameRef.current.value)}

    const middleNameRef=useRef(null)
    const middleName=()=>{middleNameRef.current.focus()}
    
    const lastNameRef=useRef(null)
    const lastName=()=>{lastNameRef.current.value=""}
  return (
    <>
      <Box name="Use Ref Hook" />
      <div className="inputBox">
        <div className="inputBox1">
          <input className="Name" type="text" placeholder="First Name" ref={firstNameRef} ></input>
          <button onClick={firstName}>Console Log on Click</button>
        </div>
        <div className="inputBox2">
          <input className="Name" type="text" placeholder="Middle Name" ref={middleNameRef}></input>
          <button onClick={middleName}>Focus On Click</button>
        </div>
        <div className="inputBox3">
          <input className="Name" type="text" placeholder="Last Name" ref={lastNameRef}></input>
          <button onClick={lastName}>Empty On Click</button>
        </div>
      </div>
    </>
  );
};

export default UseRef;
