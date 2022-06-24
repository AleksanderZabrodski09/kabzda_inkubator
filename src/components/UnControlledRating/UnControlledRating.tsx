import React, {useState} from "react";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5 //number
}

type StarPropsType = {
    selected: boolean
    setValue:(value: 1 | 2 | 3 | 4 | 5)=> void
    value: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

  return <span onClick={()=> {props.setValue(props.value)}}> {props.selected ? <b> Star </b> : "Star"} </span>


    // if (props.selected === true) {
    //     return <span><b>Star </b></span>
    // }
    // else {
    //     return <span>Star </span>
    // }
    // props.selected
}

export function UnControlledRating(props: RatingPropsType) {
    console.log("UnControlledRating rendering");
    let [value, setValue]=useState< number >(1)
        return (
            <div>
                <Star selected={value > 0} setValue={setValue}  value={1}/>
                <Star selected={value > 1} setValue={setValue}  value={2}/>
                <Star selected={value > 2} setValue={setValue}  value={3}/>
                <Star selected={value > 3} setValue={setValue}  value={4}/>
                <Star selected={value > 4} setValue={setValue}  value={5}/>
            </div>
        );
    }
