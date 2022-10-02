import React, {useState} from "react";

type RatingPropsType = {
  // value:  1 | 2 | 3 | 4 | 5 //number
}



function UnContrRating(props: RatingPropsType) {
  // console.log("UnContrRating rendering");

  let [value, setValue] = useState<1 | 2 | 3 | 4 | 5>(1)
  return (
    <div>


      <Star selected={value > 0} setValue={() => {setValue(1)}}/>
      <Star selected={value > 1} setValue={() => {
        setValue(2)
      }}/>
      <Star selected={value > 2} setValue={() => {
        setValue(3)
      }}/>
      <Star selected={value > 3} setValue={() => {
        setValue(4)
      }}/>
      <Star selected={value > 4} setValue={() => {
        setValue(5)
      }}/>

      {/*<Star selected={value > 0} setValue={setValue} value={1}/>*/}
      {/*<Star selected={value > 1} setValue={setValue} value={2}/>*/}
      {/*<Star selected={value > 2} setValue={setValue} value={3}/>*/}
      {/*<Star selected={value > 3} setValue={setValue} value={4}/>*/}
      {/*<Star selected={value > 4} setValue={setValue} value={5}/>*/}
    </div>
  )
}


type StarPropsType = {
  selected: boolean
  setValue: () => void

  // setValue:(value: 1 | 2 | 3 | 4 | 5)=>void
  // value: 1 | 2 | 3 | 4 | 5
}


function Star(props: StarPropsType) {
  // console.log("Star rendering")
  return <span onClick={() => props.setValue()}>{props.selected ? <b>Star </b> : ' Star'}</span>
  // return <span onClick={()=>props.setValue(props.value)}>{props.selected ? <b>Star </b> : ' Star'}</span>

}

export default UnContrRating