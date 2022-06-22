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
      <AccordionTitle title={props.titleValue}/>
      <button onClick={(event)=>{
        setCollapsed(!collapsed)
      }}>Toggle</button>
      {!collapsed && <AccordionBody/>}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return (
    <div>
      <h3>{props.title}</h3>
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