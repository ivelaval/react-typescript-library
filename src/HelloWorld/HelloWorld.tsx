import React, { FC } from 'react';
import { Heading } from './HelloWorld.style';

export interface IHelloWorldProps {
  text: string,
}

const HelloWorld: FC<IHelloWorldProps> = ({ text }) => {
  return (
    <Heading>{text}</Heading>
  );
};

export default HelloWorld;
