import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';


const GetCategoryObj = (categoryName: string) => ({
  table: {
    category: categoryName
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
const onClickCallBack = action('same items was clicked')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

const callbackProps = {
  onClick: callBack,
  onClickValue: onClickCallBack
  // items:['Andrew','Sergei', 'Vasyl','Alex']
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
  ...callbackProps,
  titleValue: '--Menu--',
  collapsed: true,
  items: [],


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
  items: [{title: 'Andrew', value: 1}, {title: 'Sergei', value: 2}, {title: 'Vasyl', value: 3}, {
    title: 'Alex',
    value: 4
  }]
}

// export const UsersUnCollapsedMode: ComponentStory<typeof Accordion> = () => <Accordion titleValue={'--Users--'} collapsed={false} onClick={callBack}/>;

export const AccordionChanging: ComponentStory<typeof Accordion> = (args) => {
  const [mode, setMode] = useState<boolean>(true)
  return <Accordion{...args}
                   collapsed={mode}
                   items={[{title: 'Andrew', value: 1}, {title: 'Sergei', value: 2}, {
                     title: 'Vasyl',
                     value: 3
                   }, {title: 'Alex', value: 4}]}
                   onClick={() => setMode(!mode)} onClickValue={onClickCallBack}/>
};
AccordionChanging.args = {
  titleValue: '--Menu--'
}






