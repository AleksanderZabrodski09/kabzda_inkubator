import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import Accordion from './components/Accordion/Accordion';


function Hello() {
  console.log("Hello rendering")
  alert('Hello IT');
}

// Hello()

//function declaration
function App() {
  //полезное что-то
  // обязана вернуть JSX

let [ratingValue, setRatingValue]=useState<RatingValueType>(4)
  let [collapsed, setCollapsed]=useState(false)
  return (
    <div>
        <OnOff/>
        <OnOff/>

      <Rating value={ratingValue} onClick={setRatingValue}
      />
      <Accordion titleValue={"Menu"} collapsed={collapsed} onClick={()=>setCollapsed(!collapsed)}/>

      {/*<UnControlledAccordion titleValue={"Menu"} />*/}
      {/*<UnControlledRating />*/}

      {/*<UnControlledAccordion titleValue={"Users"} collapsed={false}/>*/}
      {/*<UnControlledRating value={0}/>*/}
      {/*<UnControlledRating value={1}/>*/}
      {/*<UnControlledRating value={3}/>*/}
      {/*<UnControlledRating value={4}/>*/}
      {/*<UnControlledRating value={5}/>*/}


    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}


export default App;
