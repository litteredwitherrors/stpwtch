import React from 'react';
import { Text, Stack } from 'office-ui-fabric-react';
import './TimeDisplay.css';

type TimeProps = {
  timeStamp: any
}

export const TimeDisplay: React.FunctionComponent<TimeProps> = ({timeStamp}) => {
  return (
    <Stack horizontal>
      <Text 
        variant="mega"
        nowrap
        block 
      >
        <span className="time-display-digit">{(timeStamp.m >= 10)? timeStamp.m : "0"+ timeStamp.m}:</span>
        <span className="time-display-digit">{(timeStamp.s >= 10)? timeStamp.s : "0"+ timeStamp.s}.</span>
        <span className="time-display-digit">{(timeStamp.ms >= 10)? timeStamp.ms : "0"+ timeStamp.ms}</span>
      </Text>
    </Stack>
  )
}