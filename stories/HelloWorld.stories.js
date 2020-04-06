import React from 'react';
import { action } from '@storybook/addon-actions';
import HelloWorld from '../src/HelloWorld/HelloWorld';

export default {
  title: 'Hello World',
  component: HelloWorld,
};

export const Text = () => <HelloWorld text="primary" />;
export const Emoji = () => <HelloWorld text="secondary" />;
