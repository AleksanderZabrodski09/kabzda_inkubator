import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {action} from '@storybook/addon-actions';
import UnControlledAccordion from './UnControlledAccordion';




export default {
  title: 'UnControlledAccordion stories',
  component: UnControlledAccordion,

} as ComponentMeta<typeof UnControlledAccordion>;

// const callBack= action('on or off collapsed')



export const UnControlledAccordionChanging: ComponentStory<typeof UnControlledAccordion> = () => {
 return <UnControlledAccordion titleValue={'--Menu--'}/>
};

