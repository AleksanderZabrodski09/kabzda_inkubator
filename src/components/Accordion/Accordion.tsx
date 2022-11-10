import React from "react";


type ItemType={
  title:string
  value:any
}

export type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onClick: ()=>void
  onClickValue:(value:any)=>void

  items:ItemType[]
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
        {!props.collapsed && <AccordionBody onClickValue={props.onClickValue} items={props.items}/>}
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

export type AccordionBodyType = {
  items:ItemType[]
  onClickValue:(value:any)=>void
}


function AccordionBody(props:AccordionBodyType) {
  console.log("AccordionBody rendering");
  return (
    <ul>
      {props.items.map((el,index)=>  <li onClick={()=>{props.onClickValue(el.value)}} key={index}>{el.title}</li>
      )}
    </ul>
  )
}

export default Accordion