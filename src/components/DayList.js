import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const days = props.days.map(daysObject => {
    return (
      <DayListItem
        key={daysObject.id}
        name={daysObject.name}
        spots={daysObject.spots}
        selected={daysObject.name === props.value}
        setDay={props.onChange}
      />
    );
  });
  return (
    <ul>
      {days}
    </ul>
  );
}