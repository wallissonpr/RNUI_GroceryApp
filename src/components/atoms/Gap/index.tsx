import {View} from 'react-native';
import React from 'react';

interface GapProps {
  height: number;
  width?: number;
}

const Gap = ({height, width}: GapProps) => {
  return <View style={{height: height, width: width}} />;
};

export default Gap;
