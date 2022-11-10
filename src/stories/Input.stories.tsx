import React, {ChangeEvent, useRef, useState} from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

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

export const ControlledInput = () => {
  const[parentValue, setParentValue]=useState('')

  const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    setParentValue(e.currentTarget.value)
  }
  return<input value={parentValue} onChange={onChangeHandler}/>

};
export const ControlledCheckBox = () => {
  const[parentValue, setParentValue]=useState(false)

  const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    setParentValue(e.currentTarget.checked)
  }
  return<input type='checkbox' checked={parentValue}  onChange={onChangeHandler}/>

};
export const ControlledSelect = () => {
  const[parentValue, setParentValue]=useState<string|undefined>(undefined)

  const onChangeHandler=(e:ChangeEvent<HTMLSelectElement>)=>{
    setParentValue(e.currentTarget.value)
  }
  return <select value={parentValue} onChange={onChangeHandler}>
    <option>none</option>
    <option value={'1'}>Minsk</option>
    <option value={'2'}>Kiev</option>
    <option value={'3'}>Warsaw</option>
  </select>

};



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

