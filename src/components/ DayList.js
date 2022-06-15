import React from "react";
import DayListItem from "./DayListItem";
import "./DayListItem.scss";


export default function DayList(props) {
  const days = props.days.map(daysObject => {
    return (
      <ul>
        <DayListItem
          key={daysObject.days.id}
          name={daysObject.days.name}
          spots={daysObject.days.spots}
          selected={daysObject.days.name === props.day}
          setDay={daysObject.setDay}
        />
      </ul>
    )
  });
}