import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion';
import UncontrRating from './components/UncontrRating/UncontrRating';


function Hello() {
  console.log("Hello rendering")
  alert('Hello IT');
}

// Hello()

//function declaration
function App() {
  //полезное что-то
  // обязана вернуть JSX


  return (
    <div>
      <OnOff/>
      <OnOff/>
      <OnOff/>

      <UnControlledAccordion titleValue={"Menu"}/>
      <UnControlledAccordion titleValue={"Users"}/>

      <UncontrRating/>


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
