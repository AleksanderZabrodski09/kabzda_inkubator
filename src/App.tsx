import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';


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
      <UnControlledAccordion titleValue={"Menu"} />
      <UnControlledRating/>

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
