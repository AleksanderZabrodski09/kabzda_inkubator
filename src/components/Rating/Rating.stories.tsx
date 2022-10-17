import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating, RatingValueType} from './Rating';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: 'Rating stories',
  component: Rating,


} as ComponentMeta<typeof Rating>;


// const Template: ComponentStory<typeof Rating> = () => <Rating value={1} onClick={x=>x}/>;


export const EmptyRating: ComponentStory<typeof Rating> = () => <Rating value={1} onClick={x=>x}/>;
export const Rating1: ComponentStory<typeof Rating> = () => <Rating value={2} onClick={x=>x}/>;
export const Rating2: ComponentStory<typeof Rating> = () => <Rating value={3} onClick={x=>x}/>;
export const Rating3: ComponentStory<typeof Rating> = () => <Rating value={4} onClick={x=>x}/>;
export const Rating4: ComponentStory<typeof Rating> = () => <Rating value={5} onClick={x=>x}/>;
export const ChangingRating: ComponentStory<typeof Rating> = () => {
  const [rating, setRating]=useState<RatingValueType>(3)
 return <Rating value={rating} onClick={setRating}/>
};

// export const EmptyRating = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
