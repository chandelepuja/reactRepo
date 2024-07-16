import React from "react";

class ClassCompCall extends React.Component {
    render(){
        console.log(this.props);

        const {myName, companyName, personObj} = this.props; //ES6 feature of destructuring
        console.log(personObj);
        return(
            <>
            <h2>Welcome to class comp call {myName}</h2>
            <h2>Welcome to class comp call company name {companyName}</h2>
            <p>Person Details {JSON.stringify(personObj)}</p>
            </>
        )

    }
}
export default ClassCompCall;