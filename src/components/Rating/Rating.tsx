import React from "react";


export type RatingValueType = 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
  value: RatingValueType //number
  onClick: (value: RatingValueType) => void

}

type StarPropsType = {
  selected: boolean
  valueStar: RatingValueType
  onClickStar: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
  console.log("UnControlledRating rendering");
  return (
    <div>
      <Star selected={props.value > 0} valueStar={1} onClickStar={props.onClick}/>
      <Star selected={props.value > 1} valueStar={2} onClickStar={props.onClick}/>
      <Star selected={props.value > 2} valueStar={3} onClickStar={props.onClick}/>
      <Star selected={props.value > 3} valueStar={4} onClickStar={props.onClick}/>
      <Star selected={props.value > 4} valueStar={5} onClickStar={props.onClick}/>
    </div>
  );
}

function Star(props: StarPropsType) {
  console.log("Star rendering")
  return <span onClick={()=>{props.onClickStar(props.valueStar)}}>
    {props.selected ? <b>Star </b> : 'Star '}</span>
  // if (props.selected === true) {
  //     return <span><b>Star </b></span>
  // }
  // else {
  //     return <span>Star </span>
  // }
  // props.selected
}

