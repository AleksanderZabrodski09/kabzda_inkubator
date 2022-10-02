import React from "react";
import UncontrRating from '../UncontrRating/UncontrRating';


export type RatingValueType = 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
  value: RatingValueType //number
  setValue:(value: RatingValueType)=>void
}

type StarPropsType = {
  selected: boolean
  onClick:()=>void
}

export function Rating(props: RatingPropsType) {
  console.log("Rating rendering");
  return (
    <div>
      <Star selected={props.value > 0} onClick={()=>props.setValue(1)}/>
      <Star selected={props.value > 1} onClick={()=>props.setValue(2)}/>
      <Star selected={props.value > 2} onClick={()=>props.setValue(3)}/>
      <Star selected={props.value > 3} onClick={()=>props.setValue(4)}/>
      <Star selected={props.value > 4} onClick={()=>props.setValue(5)}/>
    </div>
  );
}


function Star(props: StarPropsType) {
  // console.log("Star rendering")
  return <span onClick={props.onClick}>{props.selected ? <b>Star </b> : ' Star '}</span>


}


export default Rating