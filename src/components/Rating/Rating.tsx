import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5 //number
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    if (props.selected === true) {
        return <span><b>Star </b></span>
    }
    else {
        return <span>Star </span>
    }
    // props.selected
}

export function Rating(props: RatingPropsType) {
    console.log("UnControlledRating rendering");
        return (
            <div>
                <Star selected={props.value > 0}/>
                <Star selected={props.value > 1}/>
                <Star selected={props.value > 2}/>
                <Star selected={props.value > 3}/>
                <Star selected={props.value > 4}/>
            </div>
        );
    }
