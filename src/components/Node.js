import React from 'react';
import styled from 'styled-components';

const NodeContainer = styled.div`
  position: absolute;
  width: 120px;
  height: 80px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border-radius: 10px;
  box-shadow: 5px 5px 15px #d1d1d1, -5px -5px 15px #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 7px 7px 20px #d1d1d1, -7px -7px 20px #ffffff;
  }
`;

const Node = ({ data }) => {
  return (
    <NodeContainer style={{ left: data.x, top: data.y }}>
      <span>{data.title}</span>
    </NodeContainer>
  );
};

export default Node;
