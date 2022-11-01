import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';




export default {
  title: 'components/OnOff stories',
  component: OnOff,


} as ComponentMeta<typeof OnOff>;


// const Template: ComponentStory<typeof Rating> = () => <Rating value={1} onClick={x=>x}/>;
const callBack= action('on or off clicked')

export const onMode: ComponentStory<typeof OnOff> = () => <OnOff on={true} setOn={callBack}/>;
export const offMode: ComponentStory<typeof OnOff> = () => <OnOff on={false} setOn={callBack}/>;

export const OnOffChanging: ComponentStory<typeof OnOff> = () => {
  const [mode, setMode]=useState<boolean>(true)
 return <OnOff on={mode} setOn={setMode}/>
};

// export const EmptyRating = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
//
