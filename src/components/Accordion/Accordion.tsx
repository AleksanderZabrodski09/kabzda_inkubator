import React from "react";

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onClick: ()=>void
}

function Accordion(props: AccordionPropsType) {
  console.log("UnControlledAccordion rendering");
    return (
      <div>
        <AccordionTitle title={props.titleValue} onClickTitle={props.onClick}/>
        {!props.collapsed && <AccordionBody/>}
      </div>
    )
  }

type AccordionTitlePropsType = {
  title: string
  onClickTitle:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return (
    <div>
      <h3 onClick={props.onClickTitle}>{props.title}</h3>

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

export default Accordion