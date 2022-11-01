import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';



const GetCategoryObj=(categoryName:string)=>({
  table:{
    category:categoryName
  }
})



export default {
  title: 'components/Accordion stories',
  component: Accordion,
  arsTypes: {
    color: {
      control: 'color',
      ...GetCategoryObj('color')
    }

  }
} as ComponentMeta<typeof Accordion>;

const callBack = action('on or off collapsed')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

const callbackProps = {
  onClick: callBack
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
  ...callbackProps,
  titleValue: '--Menu--',
  collapsed: true,

}
// export const MenuCollapsedMode: ComponentStory<typeof Accordion> = () => <Accordion titleValue={'--Menu--'}
// collapsed={true}
// onClick={callBack}
// />;



export const UsersCollapsedMode = Template.bind({})
UsersCollapsedMode.args = {
  ...callbackProps,
  titleValue: '--Users--',
  collapsed: false,

}

// export const UsersCollapsedMode: ComponentStory<typeof Accordion> = () => <Accordion titleValue={'--Users--'} collapsed={false} onClick={callBack}/>;

export const AccordionChanging: ComponentStory<typeof Accordion> = (args) => {
  const [mode, setMode] = useState<boolean>(true)
  return <Accordion{...args} collapsed={mode} onClick={() => setMode(!mode)}/>
};
AccordionChanging.args = {
  titleValue: '--Menu--'
}


// export const EmptyRating = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
//
