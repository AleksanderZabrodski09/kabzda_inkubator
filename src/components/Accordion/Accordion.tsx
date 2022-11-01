import React from "react";

export type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onClick: ()=>void
  /**
   * optional color of header text
   */
  color?:string
}

function Accordion(props: AccordionPropsType) {
  console.log("UnControlledAccordion rendering");
    return (
      <div>
        <AccordionTitle title={props.titleValue}
                        onClickTitle={props.onClick}
                        color={props.color}

        />
        {!props.collapsed && <AccordionBody/>}
      </div>
    )
  }

type AccordionTitlePropsType = {
  title: string
  onClickTitle:()=>void
  color?:string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return (
    <div>
      <h3 style={{color:props.color? props.color : 'black'}}
        onClick={(e)=>props.onClickTitle()}>{props.title}</h3>

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