import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UnControlledRating} from './UnControlledRating';
import {action} from '@storybook/addon-actions';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: 'UnControlledRating stories',
  component: UnControlledRating,
  // onChange:()=void

} as ComponentMeta<typeof UnControlledRating>;


const Template: ComponentStory<typeof UnControlledRating> = () => <UnControlledRating defaultValue={1} onChange={x=>x}/>;

const callback = action('ratting changed inside component')
//
export const EmptyRating: ComponentStory<typeof UnControlledRating> = () => <UnControlledRating defaultValue={1} onChange={callback}/>;
export const Rating1: ComponentStory<typeof UnControlledRating> = () => <UnControlledRating  defaultValue={2} onChange={callback}/>;
export const Rating2: ComponentStory<typeof UnControlledRating> = () => <UnControlledRating defaultValue={3} onChange={callback}/>;
export const Rating3: ComponentStory<typeof UnControlledRating> = () => <UnControlledRating  defaultValue={4} onChange={callback}/>;
export const Rating4: ComponentStory<typeof UnControlledRating> = () => <UnControlledRating  defaultValue={5} onChange={callback}/>;

//

