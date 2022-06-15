import React from "react";
import DayListItem from "./DayListItem";



export default function DayList(props) {
  const days = props.days.map(daysObject => {
    console.log(daysObject);
    return (
      <DayListItem
        key={daysObject.id}
        name={daysObject.name}
        spots={daysObject.spots}
        selected={daysObject.name === props.day}
        setDay={props.setDay}
      />
    );
  });
  return (
    <ul>
      {days}
    </ul>
  );
}