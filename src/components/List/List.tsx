import React from 'react';
import { Text, Stack } from 'office-ui-fabric-react';
import './List.css';

export const List: React.FunctionComponent<any> = (props) => {
  const propItems = props.data;

  const listItems = propItems.map((item: any) => {
    return (
      <li>
        <Text>{(item.m >= 10)? item.m : "0"+ item.m}:</Text>
        <Text>{(item.s >= 10)? item.s : "0"+ item.s}.</Text>
        <Text>{(item.ms >= 10)? item.ms : "0"+ item.ms}</Text>
      </li>
    )
  })
  return (
    <Stack className="list-container">
      <h2><Text variant="mediumPlus">Laps</Text></h2>
      <ul className="list">
        { listItems }
      </ul>
    </Stack>
  )
}