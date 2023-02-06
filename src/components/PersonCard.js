import React, {useState} from "react";

const PersonCard = (props) => {

    const [age,setAge] = useState(props.age);
    const {firstName, lastName, hairColor} = props;
    const clicked = () =>{
        setAge(age+1);
    }
    return (
        <div>
            <h1> { lastName }, { firstName } </h1>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={clicked}>Birthday button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard;