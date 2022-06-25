import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion';
import UnContrRating from './components/UncontrRating/UncontrRating';


function Hello() {
  console.log("Hello rendering")
  alert('Hello IT');
}

// Hello()

//function declaration
function App() {
  //полезное что-то
  // обязана вернуть JSX
let[collapsed, setCollapsed]=useState(false)
  let[value, setValue]=useState<RatingValueType>(1)

  return (
    <div>
      <OnOff/>
      <OnOff/>
      <OnOff/>

      <UnContrRating />
      <UnControlledAccordion titleValue={"Menu"}/>


      <Accordion titleValue={"Users"} collapsed={collapsed} onChange={()=> {setCollapsed(!collapsed)}}/>
      <Rating value={value} setValue={setValue}/>

      {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
      {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
      {/*<Rating value={0}/>*/}
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}


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
