// @flow

import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

const Title = styled(Text)`
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.getWidthFromDP('10%')}px;
  margin-left: ${({ theme }) => theme.metrics.largeSize}px;
  font-size: ${({ theme }) => theme.metrics.extraLargeSize * 1.7}px;
  font-family: CircularStd-Black;
  color: ${({ theme }) => theme.colors.white};
`;

type Props = {
  title: string,
};

const ScreenTitle = ({ title }: Props) => <Title>{title}</Title>;

export default ScreenTitle;
