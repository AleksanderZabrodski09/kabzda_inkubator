import React, {ChangeEvent, useRef, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
title: 'input',
// component: OnOff,
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};

export const UncontrolledInput = () => <input/>;
export const TrackValueUncontrolledInput = () => {
  const[value, setValue]=useState('');

  const onChange=(event:ChangeEvent<HTMLInputElement>)=>{
    const actualValue= event.currentTarget.value
    setValue(actualValue)
  }

  return <>
    <input onChange={onChange}/> - {value}</>
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const[value, setValue]=useState('');
  let inputRef = useRef<HTMLInputElement>(null);
  const onClickHandler=()=>{
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value)
  }

  return <>
    <input ref={inputRef}/>
    <button onClick={onClickHandler}>save</button>
    actual value: {value}
  </>
};

export const ControlledInput = () => <input value={"it-incub.by"}/>;



// export default {
  // title: 'input',
  // component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
// } as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Input> = (args) => <input
//   {/*{...args} */}
// />;

// export const UncontrolledInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

