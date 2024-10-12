import React from 'react';
import styled from 'styled-components';

const StyledPath = styled.path`
  fill: none;
  stroke: #007bff;
  stroke-width: 2;
  stroke-dasharray: 5, 5;
`;

const Path = ({ data }) => {
  return <StyledPath d={data.path} />;
};

export default Path;
