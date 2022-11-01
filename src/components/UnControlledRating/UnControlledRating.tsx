import React, {useState} from "react";


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
  defaultValue?: RatingValueType
  onChange:(value:RatingValueType)=>void
  // value: RatingValueType //number
}

export function UnControlledRating(props: RatingPropsType) {
  console.log("UnControlledRating rendering");
  let [value, setValue]=useState< RatingValueType >(props.defaultValue ? props.defaultValue : 0)
  return (
    <div>
     
      <Star selected={value > 0} setValue={()=>{setValue(1); props.onChange(1);}}/>
      <Star selected={value > 1} setValue={()=>{setValue(2); props.onChange(2);}}/>
      <Star selected={value > 2} setValue={()=>{setValue(3); props.onChange(3);}}/>
      <Star selected={value > 3} setValue={()=>{setValue(4); props.onChange(4);}}/>
      <Star selected={value > 4} setValue={()=>{setValue(5); props.onChange(5);}}/>
      {/*<Star selected={value > 1} setValue={setValue(2)}  value={2}/>*/}
      {/*<Star selected={value > 2} setValue={setValue(3)}  value={3}/>*/}
      {/*<Star selected={value > 3} setValue={setValue(4)}  value={4}/>*/}
      {/*<Star selected={value > 4} setValue={setValue(5)}  value={5}/>*/}
    </div>
  );
}


type StarPropsType = {
    // value: RatingValueType
    selected: boolean
    setValue:(value:RatingValueType)=> void
    // value: 1 | 2 | 3 | 4 | 5

}

function Star(props: StarPropsType) {
    console.log("Star rendering")
const onClickHandler=()=>{
  props.setValue(1)
}
  return <span onClick={onClickHandler}> {props.selected ? <b> Star </b> : "Star"} </span>


    // if (props.selected === true) {
    //     return <span><b>Star </b></span>
    // }
    // else {
    //     return <span>Star </span>
    // }
    // props.selected
}


