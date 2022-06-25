import React, {useState} from "react";

type AccordionPropsType = {
  titleValue: string
  // collapsed: boolean
}

function UnControlledAccordion(props: AccordionPropsType) {
  console.log("UnControlledAccordion rendering");
  let [collapsed, setCollapsed] = useState<boolean>(false) ;
  return (
    <div>
      <AccordionTitle title={props.titleValue} onClick={()=>{
         setCollapsed(!collapsed)}}/>
      {/*<button onClick={(event)=>{*/}
      {/*  setCollapsed(!collapsed)*/}
      {/*}}>Toggle</button>*/}
      {!collapsed && <AccordionBody/>}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return (
    <div>
      <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
    </div>
  )
}


function AccordionBody() {
  console.log("AccordionBody rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

export default UnControlledAccordion