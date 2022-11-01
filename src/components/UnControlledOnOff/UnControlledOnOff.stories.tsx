import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UnControlledOnOff} from './UnControlledOnOff';
import {action} from '@storybook/addon-actions';




export default {
  title: 'UnControlledOnOff stories',
  component: UnControlledOnOff,


} as ComponentMeta<typeof UnControlledOnOff>;


// const Template: ComponentStory<typeof Rating> = () => <Rating value={1} onClick={x=>x}/>;
const callBack= action('on or off clicked')

export const onMode: ComponentStory<typeof UnControlledOnOff> = () => <UnControlledOnOff defaultOn={true} setOn={callBack}/>;
export const offMode: ComponentStory<typeof UnControlledOnOff> = () => <UnControlledOnOff defaultOn={false} setOn={callBack}/>;
// export const BugMode=()=><div>Unsync when change defaultValue when already rendered</div>

// export const UnControlledOnOffChanging: ComponentStory<typeof UnControlledOnOff> = () => {
//   // const [mode, setMode]=useState<boolean>(true)
//  return <UnControlledOnOff />
// };

// export const EmptyRating = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
//
