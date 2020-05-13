import React, { useState } from 'react';
import { DefaultButton, PrimaryButton, Stack } from 'office-ui-fabric-react';
import { TimeDisplay } from '../TimeDisplay/TimeDisplay';
import './Stpwtch.css';
import { List } from '../List/List'

const TeamBtnStyles = {
  root: {
    backgroundColor: "#6264A7",
    borderColor: "#6264A7",
    transition: "0.3s all"
  },
  rootHovered: {
    borderColor: "#464775",
    backgroundColor: "#464775"
  }
}

export const Stpwtch: React.FunctionComponent = () => {
  const [timeStamp, setTimestamp] = useState({ms:0, s:0, m:0});
  const [inter, setInter] = useState<any>();
  const [status, setStatus] = useState<number>(0);
  const [laps, setLaps] = useState<any[]>([]);
 
  const startTimer = () => {
    runTimer()
    setInter(window.setInterval(runTimer, 10));
    setStatus(1) 
  }

  let milliseconds = timeStamp.ms,
      seconds = timeStamp.s,
      minutes = timeStamp.m

  const runTimer = () => {
    if(seconds === 60) { minutes++; seconds = 0; }
    if(milliseconds === 100) { seconds++; milliseconds = 0; }

    milliseconds++
    return setTimestamp({ms:milliseconds, s:seconds, m:minutes})
  }

  const stopTimer = () => {
    clearInterval(inter);
    setStatus(2);
  }

  const resetTimer = () => {
    clearInterval(inter);
    setStatus(0);
    setLaps([]);
    return setTimestamp({ms:0, s:0, m:0})
  }
  
  const logTime = () => {
    setLaps([...laps, timeStamp]);
    console.log(laps);
  }

  return (
    <div className="layout">
      <Stack>
        <TimeDisplay timeStamp={timeStamp}/> 
        {(status === 0)?
          <Stack.Item align="center">
            <DefaultButton 
              text="Lap" onClick={logTime} disabled/>
            <PrimaryButton 
              text="Start"
              styles={TeamBtnStyles}
              className="btn-layout"
              onClick={startTimer} 
            />
          </Stack.Item> : ""
        }
        {(status === 1)?
          <Stack.Item align="center">
            <DefaultButton 
              text="Lap" onClick={logTime} />
            <PrimaryButton 
              text="Stop"
              styles={{
                root: {
                  color: "#d83b01",
                  borderColor: "#d83b01",
                  backgroundColor: "transparent",
                  transition: "0.3s all"
                },
                rootHovered: {
                  backgroundColor:"#d83b01",
                  borderColor: "#d83b01",
                }
              }}
              className="btn-layout"
              onClick={stopTimer} 
            />
          </Stack.Item> : ""
        }
        {(status === 2)?
          <Stack.Item align="center">
            <DefaultButton 
              text="Reset" onClick={resetTimer} /> 
            <PrimaryButton 
              text="Resume"
              styles={TeamBtnStyles}
              className="btn-layout"
              onClick={startTimer} 
            />
          </Stack.Item> : ""
        }
      </Stack>
      <List data={laps} />
    </div>
  )
}