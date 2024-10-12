import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import Node from './Node';
import Path from './Path';
import { fetchLearningMapData } from '../services/DataService';

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
  position: relative;
`;

const LearningMap = () => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchLearningMapData();
      setMapData(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (mapData) {
      const svg = d3.select('#map-svg');
      // Use D3.js to create the layout and position nodes
      // This is a placeholder and would need to be implemented
    }
  }, [mapData]);

  if (!mapData) return <div>Loading...</div>;

  return (
    <MapContainer>
      <svg id="map-svg" width="100%" height="100%">
        {mapData.paths.map((path, index) => (
          <Path key={index} data={path} />
        ))}
      </svg>
      {mapData.nodes.map((node) => (
        <Node key={node.id} data={node} />
      ))}
    </MapContainer>
  );
};

export default LearningMap;
