import React from 'react';
import styled from 'styled-components';

import { FixedBar } from '../components';

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
`;

export const HeaderLogo = () => {
  return <HeaderWrapper></HeaderWrapper>;
};
