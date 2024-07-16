import React from 'react';

const JsxComponent = () =>{

    let a = 10, b = 20;
    return(
        <React.Fragment>
           <h2>This is Jsx Component</h2>
           <h2>Addition of two number is {a+b}</h2>
           <h3>{a>50  ? "a is greater than 50" : "a is less than 50"}</h3>
        </React.Fragment>
    )
}
export default JsxComponent;