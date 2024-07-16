import React from "react";

const FuncCompCall = (props) =>{
    const {myName, companyName, personObjFun} = props;
    return(
    <>
    "======================================================="
        <h2>Welcome to func Comp call {myName}</h2>
        <h2>Welcome to my dream company {companyName}</h2>
        <p>Person Details : {JSON.stringify(personObjFun)}</p>
        </>
    )
}
export default FuncCompCall;