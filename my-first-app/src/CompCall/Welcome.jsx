import React from "react";
import ClassCompCall from "./ClassCompCall";
import FuncCompCall from "./FuncCompCall";

const Welcome = () =>{
    const name = 'Pooja';
    let person= {
        name: "Darshan",
        age: 24,
        address:"Pune"
    }
    return(
        <>
        <h1>Welcome to Welcome Component</h1>
        <ClassCompCall myName = {name} companyName = "Infosys" personObj = {person}/>
        <FuncCompCall myName = {name} companyName = "Wipro" personObjFun = {person}/>
        </>
    )

}
export default Welcome;